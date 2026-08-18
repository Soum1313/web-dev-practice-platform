import type { Task, TaskStatus, TaskTrack } from "../../types/task";
import { RoadmapPath } from "./RoadmapPath";
import "./Roadmap.css";

const TRACK_ORDER: TaskTrack[] = ["HTML", "CSS", "HTML + CSS", "JavaScript", "Full Project"];

type RoadmapProps = {
  tasks: Task[];
  statusByTaskId: Record<string, TaskStatus>;
};

/** Day 1 roadmap: tasks grouped into sub-tracks (HTML, CSS, ...), each its
 * own connected path. */
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
          <RoadmapPath steps={group.steps} statusByTaskId={statusByTaskId} />
        </div>
      ))}
    </div>
  );
}
