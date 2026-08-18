import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Task, TaskStatus, TaskTrack } from "../../types/task";
import "./Roadmap.css";

const TRACK_ORDER: TaskTrack[] = ["HTML", "CSS", "HTML + CSS", "JavaScript", "Full Project"];

type RoadmapProps = {
  tasks: Task[];
  statusByTaskId: Record<string, TaskStatus>;
};

export function Roadmap({ tasks, statusByTaskId }: RoadmapProps) {
  const tracks = TRACK_ORDER.map((track) => ({
    track,
    steps: tasks
      .filter((task) => task.track === track)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
  })).filter((group) => group.steps.length > 0);

  return (
    <div className="roadmap">
      {tracks.map((group) => (
        <div key={group.track} className="roadmap-track">
          <div className="roadmap-track__header">
            <span className="roadmap-track__label">{group.track}</span>
            <span className="roadmap-track__count">
              {group.steps.length} exercise{group.steps.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="roadmap-track__path">
            {group.steps.map((task, index) => {
              const status = statusByTaskId[task.id] ?? "not-started";
              const previousStatus =
                index > 0 ? statusByTaskId[group.steps[index - 1].id] ?? "not-started" : null;
              return (
                <Fragment key={task.id}>
                  {index > 0 && (
                    <div
                      className={`roadmap-connector${
                        previousStatus === "submitted" ? " roadmap-connector--done" : ""
                      }`}
                    />
                  )}
                  <Link to={`/task/${task.id}`} className={`roadmap-step roadmap-step--${status}`}>
                    <span className="roadmap-step__circle">
                      {status === "submitted" ? "✓" : String(task.order ?? index + 1).padStart(2, "0")}
                    </span>
                    <span className="roadmap-step__title">{task.title}</span>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
