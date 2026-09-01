import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { RoadmapPath } from "../../components/Roadmap/RoadmapPath";
import { Footer } from "../../components/Footer/Footer";
import { tasks } from "../../data/tasks";
import { trackGroups, bankTasks } from "../../data/taskGroups";
import { loadStatusByTaskId } from "../../services/persistence";
import type { TaskStatus } from "../../types/task";
import "./TasksPage.css";

const TRACK_HINTS: Record<string, string> = {
  HTML: "Structure and markup fundamentals — start here.",
  CSS: "Styling, layout, and responsive design.",
  "HTML + CSS": "Combine structure and styling into a complete page.",
  JavaScript: "DOM selection, events, and interactive behaviour.",
  "JS Fundamentals": "Core JS concepts every interview and OA leans on — closures, async, scope, and more.",
  "Full Project": "Bring everything together into a complete, working feature.",
};

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
        <h1 className="tasks-page__heading">Web Development Practice Platform</h1>
        <p className="tasks-page__subheading">
          {completedCount} / {tasks.length} completed
        </p>

        {trackGroups.map((group) =>
          group.tasks.length === 0 ? null : (
            <section className="tasks-page__section" key={group.label}>
              <h2 className="tasks-page__section-title">{group.label}</h2>
              <p className="tasks-page__section-hint">{TRACK_HINTS[group.label]}</p>
              <div className="roadmap">
                <RoadmapPath steps={group.tasks} statusByTaskId={statusByTaskId} />
              </div>
            </section>
          )
        )}

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Practice Bank</h2>
          <p className="tasks-page__section-hint">
            Optional extra pattern practice — not tied to a specific track. Useful once
            you've finished the roadmap above or want more exposure to a pattern.
          </p>
          <TaskList tasks={bankTasks} statusByTaskId={statusByTaskId} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
