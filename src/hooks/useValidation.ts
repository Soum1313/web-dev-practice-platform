import { useCallback, useState } from "react";
import { runValidation } from "../services/validation";
import type { TaskFiles } from "../types/task";
import type { ValidationResult, ValidationTest } from "../types/validation";

export function useValidation() {
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState<{ index: number; total: number } | null>(null);

  const run = useCallback(async (taskId: string, files: TaskFiles, tests: ValidationTest[]) => {
    setRunning(true);
    setResult(null);
    setProgress(null);
    const outcome = await runValidation(taskId, files, tests, (_result, index, total) => {
      setProgress({ index, total });
    });
    setResult(outcome);
    setRunning(false);
  }, []);

  return { result, running, progress, run };
}
