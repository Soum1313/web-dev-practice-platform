import { useEffect, useState } from "react";
import type { TaskProgress } from "../types/task";

export type TimerState = {
  elapsedSeconds: number;
  remainingSeconds: number | null;
  expired: boolean;
};

/**
 * Timestamp-based timer: derives elapsed/remaining time from
 * progress.startedAt rather than an in-memory counter, so it survives
 * a page refresh (spec Section 18).
 */
export function useTimer(progress: TaskProgress, timeLimit?: number): TimerState {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (progress.status !== "in-progress") return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [progress.status]);

  if (!progress.startedAt) {
    return { elapsedSeconds: 0, remainingSeconds: timeLimit ?? null, expired: false };
  }

  const referenceTime =
    progress.status === "submitted" && progress.elapsedAtSubmit !== null
      ? progress.startedAt + progress.elapsedAtSubmit
      : now;

  const elapsedMs = Math.max(0, referenceTime - progress.startedAt);
  const elapsedSeconds = Math.floor(elapsedMs / 1000);

  if (timeLimit == null) {
    return { elapsedSeconds, remainingSeconds: null, expired: false };
  }

  const remainingSeconds = Math.max(0, timeLimit - elapsedSeconds);
  return { elapsedSeconds, remainingSeconds, expired: remainingSeconds <= 0 };
}

export function formatDuration(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(safeSeconds / 3600);
  const m = Math.floor((safeSeconds % 3600) / 60);
  const s = safeSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
