import { useState } from "react";
import type { ValidationResult } from "../../types/validation";
import "./TestResults.css";

type TestResultsProps = {
  result: ValidationResult | null;
  running: boolean;
  progress: { index: number; total: number } | null;
  onRunTests: () => void;
};

function scoreLabel(score: number): string {
  if (score >= 90) return "Complete";
  if (score >= 70) return "Mostly correct";
  if (score >= 40) return "Partially correct";
  return "Needs work";
}

export function TestResults({ result, running, progress, onRunTests }: TestResultsProps) {
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());

  function toggleHint(id: string) {
    setRevealedHints((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="test-results">
      <div className="test-results__header">
        <span className="test-results__title">Tests</span>
        <button className="test-results__run-btn" onClick={onRunTests} disabled={running}>
          {running ? `Running${progress ? ` ${progress.index + 1}/${progress.total}` : "…"}` : "▶ Run Tests"}
        </button>
      </div>

      <div className="test-results__body">
        {!result && !running && (
          <div className="test-results__empty">
            Run the tests to check your work against the task's requirements.
          </div>
        )}

        {result && (
          <>
            <div className={`test-results__summary test-results__summary--${scoreLabel(result.score).replace(/\s+/g, "-").toLowerCase()}`}>
              <span className="test-results__score">{result.score} / 100</span>
              <span className="test-results__score-label">{scoreLabel(result.score)}</span>
              <span className="test-results__passed-count">
                {result.passedCount} / {result.totalCount} passed
              </span>
            </div>

            <ul className="test-results__list">
              {result.results.map((r) => (
                <li key={r.id} className={`test-results__item test-results__item--${r.passed ? "pass" : "fail"}`}>
                  <div className="test-results__item-row">
                    <span className="test-results__item-icon">{r.passed ? "✓" : "✗"}</span>
                    <span className="test-results__item-desc">{r.description}</span>
                    <span className="test-results__item-points">
                      {r.earned} / {r.points}
                    </span>
                  </div>
                  {!r.passed && r.hint && (
                    <div className="test-results__hint-row">
                      <button className="test-results__hint-btn" onClick={() => toggleHint(r.id)}>
                        {revealedHints.has(r.id) ? "Hide hint" : "Show hint"}
                      </button>
                      {revealedHints.has(r.id) && <span className="test-results__hint-text">{r.hint}</span>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
