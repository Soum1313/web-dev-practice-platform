import { tasks } from "./tasks";
import type { Task, TaskTrack } from "../types/task";

const byOrder = (a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0);

const byTrack = (track: TaskTrack) => tasks.filter((task) => task.track === track).sort(byOrder);

export const htmlTasks = byTrack("HTML");
export const cssTasks = byTrack("CSS");
export const htmlCssTasks = byTrack("HTML + CSS");
export const jsTasks = byTrack("JavaScript");
export const jsFundamentalsTasks = byTrack("JS Fundamentals");
export const fullProjectTasks = byTrack("Full Project");
export const bankTasks = tasks.filter((task) => task.bank).sort(byOrder);

export type TaskGroup = { label: string; tasks: Task[] };

export const trackGroups: TaskGroup[] = [
  { label: "HTML", tasks: htmlTasks },
  { label: "CSS", tasks: cssTasks },
  { label: "HTML + CSS", tasks: htmlCssTasks },
  { label: "JavaScript", tasks: jsTasks },
  { label: "JS Fundamentals", tasks: jsFundamentalsTasks },
  { label: "Full Project", tasks: fullProjectTasks },
];

export const allGroups: TaskGroup[] = [...trackGroups, { label: "Practice Bank", tasks: bankTasks }];
