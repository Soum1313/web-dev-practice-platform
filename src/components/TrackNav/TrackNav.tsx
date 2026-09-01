import { useState } from "react";
import { Link } from "react-router-dom";
import { allGroups } from "../../data/taskGroups";
import type { TaskStatus } from "../../types/task";
import "./TrackNav.css";

type TrackNavProps = {
  currentTaskId: string;
  statusByTaskId: Record<string, TaskStatus>;
  collapsed: boolean;
  onToggleCollapsed: () => void;
};

const STATUS_ICON: Record<TaskStatus, string> = {
  "not-started": "○",
  "in-progress": "→",
  submitted: "✓",
};

export function TrackNav({ currentTaskId, statusByTaskId, collapsed, onToggleCollapsed }: TrackNavProps) {
  const currentLabel = allGroups.find((g) => g.tasks.some((t) => t.id === currentTaskId))?.label;
  const [openLabel, setOpenLabel] = useState<string | null>(currentLabel ?? allGroups[0].label);

  return (
    <nav className={`track-nav${collapsed ? " track-nav--collapsed" : ""}`} aria-label="Task navigation by track">
      <div className="track-nav__top">
        <button
          className="track-nav__toggle"
          onClick={onToggleCollapsed}
          aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
          aria-expanded={!collapsed}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {!collapsed && (
          <Link to="/" className="track-nav__home">
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path
                d="M3.5 11.5 12 4l8.5 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 10v8.5A1.5 1.5 0 0 0 7 20h3v-5h4v5h3a1.5 1.5 0 0 0 1.5-1.5V10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Home
          </Link>
        )}
      </div>

      {!collapsed && (
        <div className="track-nav__sections">
          {allGroups.map((group) => {
            const isOpen = openLabel === group.label;
            return (
              <div key={group.label} className="track-nav__section">
                <button
                  className="track-nav__section-header"
                  onClick={() => setOpenLabel(isOpen ? null : group.label)}
                  aria-expanded={isOpen}
                >
                  <span>{group.label}</span>
                  <span className={`track-nav__chevron${isOpen ? " track-nav__chevron--open" : ""}`}>▸</span>
                </button>
                {isOpen && (
                  <ul className="track-nav__list">
                    {group.tasks.map((task) => {
                      const status = statusByTaskId[task.id] ?? "not-started";
                      const isCurrent = task.id === currentTaskId;
                      return (
                        <li key={task.id}>
                          <Link
                            to={`/task/${task.id}`}
                            className={`track-nav__link${isCurrent ? " track-nav__link--current" : ""}`}
                          >
                            <span className={`track-nav__status track-nav__status--${status}`}>
                              {STATUS_ICON[status]}
                            </span>
                            <span className="track-nav__link-text">{task.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
