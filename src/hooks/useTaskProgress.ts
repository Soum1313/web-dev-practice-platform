import { useCallback, useEffect, useRef, useState } from "react";
import type { Task, TaskFiles, TaskProgress } from "../types/task";
import { loadTaskProgress, resetTaskProgress, saveTaskProgress } from "../services/persistence";

const AUTOSAVE_DEBOUNCE_MS = 400;

function freshProgress(task: Task): TaskProgress {
  return {
    taskId: task.id,
    files: { ...task.starterFiles },
    status: "not-started",
    startedAt: null,
    submittedAt: null,
    elapsedAtSubmit: null,
  };
}

export function useTaskProgress(task: Task) {
  const [progress, setProgress] = useState<TaskProgress>(
    () => loadTaskProgress(task.id) ?? freshProgress(task)
  );

  useEffect(() => {
    setProgress(loadTaskProgress(task.id) ?? freshProgress(task));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  const progressRef = useRef(progress);
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveTaskProgress(task.id, progress);
    }, AUTOSAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [progress, task.id]);

  // Flush the latest state immediately when navigating away, so a debounced
  // save in flight is never lost to an unmount.
  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTaskProgress(task.id, progressRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  const updateFile = useCallback((fileName: keyof TaskFiles, content: string) => {
    setProgress((prev) => ({
      ...prev,
      files: { ...prev.files, [fileName]: content },
    }));
  }, []);

  const startTask = useCallback(() => {
    setProgress((prev) => {
      if (prev.status !== "not-started") return prev;
      return { ...prev, status: "in-progress", startedAt: Date.now() };
    });
  }, []);

  const resetTask = useCallback(() => {
    resetTaskProgress(task.id);
    setProgress(freshProgress(task));
  }, [task]);

  const submitTask = useCallback(() => {
    setProgress((prev) => {
      const elapsedAtSubmit = prev.startedAt ? Date.now() - prev.startedAt : 0;
      return { ...prev, status: "submitted", submittedAt: Date.now(), elapsedAtSubmit };
    });
  }, []);

  return { progress, updateFile, startTask, resetTask, submitTask };
}
