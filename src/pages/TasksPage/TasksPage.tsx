import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { tasks } from "../../data/tasks";
import { loadStatusByTaskId } from "../../services/persistence";
import type { TaskStatus } from "../../types/task";
import "./TasksPage.css";

export function TasksPage() {
  const [statusByTaskId, setStatusByTaskId] = useState<Record<string, TaskStatus>>({});

  useEffect(() => {
    setStatusByTaskId(loadStatusByTaskId(tasks.map((task) => task.id)));
  }, []);

  const completedCount = Object.values(statusByTaskId).filter((s) => s === "submitted").length;

  return (
    <div className="tasks-page">
      <Header />
      <main className="tasks-page__content">
        <h1 className="tasks-page__heading">Web Development Practice</h1>
        <p className="tasks-page__subheading">
          Choose a task · {completedCount} / {tasks.length} completed
        </p>
        <TaskList tasks={tasks} statusByTaskId={statusByTaskId} />
      </main>
    </div>
  );
}
