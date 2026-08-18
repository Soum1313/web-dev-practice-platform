import { composeDocument } from "./preview";
import { buildHarnessScript } from "./validationRuntime";
import type { TaskFiles } from "../types/task";
import type { TestResult, ValidationResult, ValidationTest } from "../types/validation";

const DEFAULT_VIEWPORT = { width: 1280, height: 800 };
const TEST_TIMEOUT_MS = 4000;

type IncomingMessage = {
  type: "validation-result";
  pass: boolean;
  message?: string | null;
  error?: string | null;
};

function runOneTest(files: TaskFiles, test: ValidationTest): Promise<TestResult> {
  return new Promise((resolve) => {
    const viewport = test.viewport ?? DEFAULT_VIEWPORT;

    const iframe = document.createElement("iframe");
    iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-modals");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "-99999px";
    iframe.style.width = `${viewport.width}px`;
    iframe.style.height = `${viewport.height}px`;
    iframe.style.border = "none";

    let settled = false;

    function cleanup() {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);
      iframe.remove();
    }

    function finish(pass: boolean, message?: string | null, error?: string | null) {
      if (settled) return;
      settled = true;
      cleanup();
      resolve({
        id: test.id,
        description: test.description,
        points: test.points,
        earned: pass ? test.points : 0,
        passed: pass,
        visibility: test.visibility,
        message: message ?? undefined,
        hint: test.hint,
        error: error ?? undefined,
      });
    }

    function handleMessage(event: MessageEvent<IncomingMessage>) {
      if (event.source !== iframe.contentWindow) return;
      const data = event.data;
      if (data?.type === "validation-result") {
        finish(data.pass, data.message, data.error);
      }
    }

    window.addEventListener("message", handleMessage);
    const timer = setTimeout(() => finish(false, null, "Test timed out."), TEST_TIMEOUT_MS);

    iframe.srcdoc = composeDocument(files, { extraHeadScript: buildHarnessScript(test) });
    document.body.appendChild(iframe);
  });
}

export async function runValidation(
  taskId: string,
  files: TaskFiles,
  tests: ValidationTest[],
  onTestComplete?: (result: TestResult, index: number, total: number) => void
): Promise<ValidationResult> {
  const results: TestResult[] = [];

  for (let i = 0; i < tests.length; i++) {
    const result = await runOneTest(files, tests[i]);
    results.push(result);
    onTestComplete?.(result, i, tests.length);
  }

  const totalPoints = tests.reduce((sum, t) => sum + t.points, 0);
  const earned = results.reduce((sum, r) => sum + r.earned, 0);
  const passedCount = results.filter((r) => r.passed).length;

  return {
    taskId,
    score: totalPoints > 0 ? Math.round((earned / totalPoints) * 100) : 0,
    totalPoints,
    passedCount,
    totalCount: tests.length,
    results,
  };
}
