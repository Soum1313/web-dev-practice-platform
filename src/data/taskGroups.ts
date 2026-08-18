import { tasks } from "./tasks";
import type { Task } from "../types/task";

const byOrder = (a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0);

export const day1Tasks = tasks.filter((task) => task.day === 1);
export const day2Tasks = tasks.filter((task) => task.day === 2).sort(byOrder);
export const day3Tasks = tasks.filter((task) => task.day === 3).sort(byOrder);
export const day4Tasks = tasks.filter((task) => task.day === 4).sort(byOrder);
export const day5Tasks = tasks.filter((task) => task.day === 5).sort(byOrder);
export const bankTasks = tasks.filter((task) => task.bank).sort(byOrder);

export type TaskGroup = { label: string; tasks: Task[] };

export const dayGroups: TaskGroup[] = [
  { label: "Day 1", tasks: day1Tasks },
  { label: "Day 2", tasks: day2Tasks },
  { label: "Day 3", tasks: day3Tasks },
  { label: "Day 4", tasks: day4Tasks },
  { label: "Day 5", tasks: day5Tasks },
];

export const allGroups: TaskGroup[] = [...dayGroups, { label: "Practice Bank", tasks: bankTasks }];
