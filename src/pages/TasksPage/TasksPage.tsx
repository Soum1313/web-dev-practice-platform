import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { Roadmap } from "../../components/Roadmap/Roadmap";
import { tasks } from "../../data/tasks";
import { loadStatusByTaskId } from "../../services/persistence";
import type { TaskStatus } from "../../types/task";
import "./TasksPage.css";

const roadmapTasks = tasks.filter((task) => task.track);
const practiceTasks = tasks.filter((task) => !task.track);

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
          {completedCount} / {tasks.length} completed
        </p>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 1 Roadmap</h2>
          <p className="tasks-page__section-hint">
            Work through each track in order — HTML, CSS, HTML + CSS, JavaScript, then the
            Full Project. Every exercise builds on the one before it.
          </p>
          <Roadmap tasks={roadmapTasks} statusByTaskId={statusByTaskId} />
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Assessment Practice</h2>
          <p className="tasks-page__section-hint">
            Cognizant-style assessment simulations. Best attempted after the roadmap above.
          </p>
          <TaskList tasks={practiceTasks} statusByTaskId={statusByTaskId} />
        </section>
      </main>
    </div>
  );
}
