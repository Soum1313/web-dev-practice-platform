import { useState } from "react";
import type { TopicLink } from "../../types/task";
import "./TopicLinks.css";

type TopicLinksProps = {
  topics: TopicLink[];
};

export function TopicLinks({ topics }: TopicLinksProps) {
  const [open, setOpen] = useState(false);

  if (topics.length === 0) return null;

  return (
    <div className="topic-links">
      <button
        className="topic-links__header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>Related Topics</span>
        <span className={`topic-links__chevron${open ? " topic-links__chevron--open" : ""}`}>▸</span>
      </button>
      {open && (
        <div className="topic-links__pills">
          {topics.map((topic) => (
            <a
              key={topic.url}
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="topic-links__pill"
            >
              {topic.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
