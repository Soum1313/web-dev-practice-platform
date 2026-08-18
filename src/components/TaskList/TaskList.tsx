import { Link } from "react-router-dom";
import type { Task, TaskStatus } from "../../types/task";
import "./TaskList.css";

type TaskListProps = {
  tasks: Task[];
  statusByTaskId: Record<string, TaskStatus>;
};

const STATUS_LABEL: Record<TaskStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  submitted: "Submitted",
};

const STATUS_ICON: Record<TaskStatus, string> = {
  "not-started": "○",
  "in-progress": "→",
  submitted: "✓",
};

export function TaskList({ tasks, statusByTaskId }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => {
        const status = statusByTaskId[task.id] ?? "not-started";
        return (
          <Link key={task.id} to={`/task/${task.id}`} className="task-card">
            <div className="task-card__main">
              <span className={`task-card__status task-card__status--${status}`}>
                {STATUS_ICON[status]}
              </span>
              <div>
                <div className="task-card__title">{task.title}</div>
                <div className="task-card__meta">HTML / CSS / JavaScript</div>
              </div>
            </div>
            <div className="task-card__footer">
              <span className={`task-card__badge task-card__badge--${status}`}>
                {STATUS_LABEL[status]}
              </span>
              <span className="task-card__open">Open →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
