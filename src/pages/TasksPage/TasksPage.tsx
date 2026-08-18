import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { Roadmap } from "../../components/Roadmap/Roadmap";
import { RoadmapPath } from "../../components/Roadmap/RoadmapPath";
import { tasks } from "../../data/tasks";
import { loadStatusByTaskId } from "../../services/persistence";
import type { TaskStatus } from "../../types/task";
import "./TasksPage.css";

const byOrder = (a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0);

const day1Tasks = tasks.filter((task) => task.day === 1);
const day2Tasks = tasks.filter((task) => task.day === 2).sort(byOrder);
const day3Tasks = tasks.filter((task) => task.day === 3).sort(byOrder);
const day5Tasks = tasks.filter((task) => task.day === 5).sort(byOrder);
const bankTasks = tasks.filter((task) => task.bank).sort(byOrder);

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
        <h1 className="tasks-page__heading">Cognizant Web Development Prep</h1>
        <p className="tasks-page__subheading">
          {completedCount} / {tasks.length} completed
        </p>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 1 — Foundation</h2>
          <p className="tasks-page__section-hint">
            Work through each track in order — HTML, CSS, HTML + CSS, JavaScript, then the
            Full Project. Every exercise builds on the one before it.
          </p>
          <Roadmap tasks={day1Tasks} statusByTaskId={statusByTaskId} />
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 2 — Combine the Basics</h2>
          <p className="tasks-page__section-hint">
            Same concepts as Day 1, but now combined with less guidance — read the
            requirement and locate the relevant code yourself.
          </p>
          <div className="roadmap">
            <RoadmapPath steps={day2Tasks} statusByTaskId={statusByTaskId} />
          </div>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 3 — Assessment Patterns</h2>
          <p className="tasks-page__section-hint">
            Realistic, unfamiliar components. Find the missing behaviour yourself before
            asking for a hint.
          </p>
          <div className="roadmap">
            <RoadmapPath steps={day3Tasks} statusByTaskId={statusByTaskId} />
          </div>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 4 — Independent Practice</h2>
          <p className="tasks-page__section-hint">
            No new tasks today — revisit the Day 2 and Day 3 tasks above independently, with
            no walkthrough. Struggling with a task? Explain the requirement, the element
            involved, and what you've tried before asking for a hint.
          </p>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 5 — Final Simulation</h2>
          <p className="tasks-page__section-hint">
            One fresh, unfamiliar project. No lecture, no walkthrough, no solution until
            you've attempted and self-debugged it.
          </p>
          <div className="roadmap">
            <RoadmapPath steps={day5Tasks} statusByTaskId={statusByTaskId} />
          </div>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Practice Bank</h2>
          <p className="tasks-page__section-hint">
            Optional extra pattern practice — not tied to a specific day. Pick a few, not
            all ten.
          </p>
          <TaskList tasks={bankTasks} statusByTaskId={statusByTaskId} />
        </section>
      </main>
    </div>
  );
}
