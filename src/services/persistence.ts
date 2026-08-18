import type { TaskProgress } from "../types/task";

const KEY_PREFIX = "practice-platform:progress:";

function keyFor(taskId: string): string {
  return `${KEY_PREFIX}${taskId}`;
}

export function saveTaskProgress(taskId: string, progress: TaskProgress): void {
  try {
    localStorage.setItem(keyFor(taskId), JSON.stringify(progress));
  } catch {
    // Storage can fail (quota, private browsing). Losing an autosave write
    // silently is preferable to crashing the editor mid-keystroke.
  }
}

export function loadTaskProgress(taskId: string): TaskProgress | null {
  try {
    const raw = localStorage.getItem(keyFor(taskId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TaskProgress;
    if (!parsed || typeof parsed !== "object" || parsed.taskId !== taskId) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function resetTaskProgress(taskId: string): void {
  try {
    localStorage.removeItem(keyFor(taskId));
  } catch {
    // ignore
  }
}

export function loadStatusByTaskId(taskIds: string[]): Record<string, TaskProgress["status"]> {
  const statuses: Record<string, TaskProgress["status"]> = {};
  for (const taskId of taskIds) {
    const progress = loadTaskProgress(taskId);
    statuses[taskId] = progress?.status ?? "not-started";
  }
  return statuses;
}
