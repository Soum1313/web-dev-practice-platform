export type TaskFiles = {
  "index.html": string;
  "style.css": string;
  "script.js": string;
};

export type TaskTrack = "HTML" | "CSS" | "HTML + CSS" | "JavaScript" | "Full Project";

export type Task = {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  timeLimit?: number; // seconds; if omitted, a stopwatch is shown instead
  /** Roadmap segment this task belongs to. Tasks without a track are shown
   * outside the roadmap, as standalone practice tasks. */
  track?: TaskTrack;
  /** Position within its track, for roadmap node ordering/labelling. */
  order?: number;
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
