export type TaskFiles = {
  "index.html": string;
  "style.css": string;
  "script.js": string;
};

export type TaskTrack =
  | "HTML"
  | "CSS"
  | "HTML + CSS"
  | "JavaScript"
  | "JS Fundamentals"
  | "Full Project";

export type TopicLink = {
  label: string;
  url: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  timeLimit?: number; // seconds; if omitted, a stopwatch is shown instead
  /** Topic-based roadmap segment this task belongs to. */
  track?: TaskTrack;
  /** Position within its track, for roadmap node ordering/labelling. */
  order?: number;
  /** Marks a task as part of the optional Practice Bank rather than a
   * topic-track roadmap. */
  bank?: boolean;
  /** Optional MDN/W3Schools links shown as a "Related Topics" accordion. */
  topics?: TopicLink[];
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
