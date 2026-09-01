import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Task, TaskStatus } from "../../types/task";
import "./Roadmap.css";

type RoadmapPathProps = {
  steps: Task[];
  statusByTaskId: Record<string, TaskStatus>;
};

/** A single connected row of roadmap nodes. Shared by the Day 1 per-track
 * groups and the flat single-row days (2, 3, 5). */
export function RoadmapPath({ steps, statusByTaskId }: RoadmapPathProps) {
  return (
    <div className="roadmap-track__path">
      {steps.map((task, index) => {
        const status = statusByTaskId[task.id] ?? "not-started";
        const previousStatus =
          index > 0 ? statusByTaskId[steps[index - 1].id] ?? "not-started" : null;
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
  );
}
