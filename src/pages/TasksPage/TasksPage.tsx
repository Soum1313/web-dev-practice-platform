import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { Roadmap } from "../../components/Roadmap/Roadmap";
import { RoadmapPath } from "../../components/Roadmap/RoadmapPath";
import { Footer } from "../../components/Footer/Footer";
import { tasks } from "../../data/tasks";
import { day1Tasks, day2Tasks, day3Tasks, day4Tasks, day5Tasks, bankTasks } from "../../data/taskGroups";
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
          <h2 className="tasks-page__section-title">Day 4 — Independent Pattern Practice</h2>
          <p className="tasks-page__section-hint">
            No walkthroughs from here on. Attempt → run → check against the requirements →
            debug → fix → re-run. Ask for a hint only after you can explain what you've
            already tried.
          </p>
          <div className="roadmap">
            <RoadmapPath steps={day4Tasks} statusByTaskId={statusByTaskId} />
          </div>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Day 5 — Independent Challenge Practice</h2>
          <p className="tasks-page__section-hint">
            Somewhat harder, unfamiliar patterns. Work at your own pace — you don't need to
            finish every task before moving to the next one.
          </p>
          <div className="roadmap">
            <RoadmapPath steps={day5Tasks} statusByTaskId={statusByTaskId} />
          </div>
        </section>

        <section className="tasks-page__section">
          <h2 className="tasks-page__section-title">Practice Bank</h2>
          <p className="tasks-page__section-hint">
            Optional extra pattern practice — not tied to a specific day. Useful for students
            who finish early or want more exposure at home.
          </p>
          <TaskList tasks={bankTasks} statusByTaskId={statusByTaskId} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
