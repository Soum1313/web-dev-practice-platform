import "./Console.css";

export type ConsoleEntry = {
  id: number;
  kind: "log" | "warn" | "error" | "runtime-error";
  text: string;
};

type ConsoleProps = {
  entries: ConsoleEntry[];
  onClear: () => void;
};

const ICON: Record<ConsoleEntry["kind"], string> = {
  log: "",
  warn: "⚠",
  error: "✕",
  "runtime-error": "✕",
};

export function Console({ entries, onClear }: ConsoleProps) {
  return (
    <div className="console">
      <div className="console__header">
        <span className="console__title">Console</span>
        <button className="console__clear" onClick={onClear}>
          Clear Console
        </button>
      </div>
      <div className="console__body">
        {entries.length === 0 && <div className="console__empty">No output yet.</div>}
        {entries.map((entry) => (
          <div key={entry.id} className={`console__entry console__entry--${entry.kind}`}>
            {ICON[entry.kind] && <span className="console__icon">{ICON[entry.kind]}</span>}
            <pre className="console__text">{entry.text}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
