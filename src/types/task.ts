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
  /** Roadmap segment this task belongs to (Day 1 only - HTML/CSS/JS/etc). */
  track?: TaskTrack;
  /** Position within its track or day, for roadmap node ordering/labelling. */
  order?: number;
  /** Which day of the prep program this task belongs to (1-5). Tasks
   * without a day are shown in the standalone Practice Bank section. */
  day?: number;
  /** Marks a task as part of the optional, unassigned Practice Bank
   * rather than the day-by-day roadmap. */
  bank?: boolean;
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
