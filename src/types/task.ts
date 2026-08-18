export type TaskFiles = {
  "index.html": string;
  "style.css": string;
  "script.js": string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  timeLimit?: number; // seconds; if omitted, a stopwatch is shown instead
  starterFiles: TaskFiles;
};

export type TaskStatus = "not-started" | "in-progress" | "submitted";

export type TaskProgress = {
  taskId: string;
  files: TaskFiles;
  status: TaskStatus;
  startedAt: number | null;
  submittedAt: number | null;
  elapsedAtSubmit: number | null;
};
