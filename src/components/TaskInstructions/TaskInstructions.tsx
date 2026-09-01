import type { Task } from "../../types/task";
import { TopicLinks } from "../TopicLinks/TopicLinks";
import "./TaskInstructions.css";

type TaskInstructionsProps = {
  task: Task;
};

export function TaskInstructions({ task }: TaskInstructionsProps) {
  return (
    <div className="task-instructions">
      <span className="task-instructions__eyebrow">{task.id}</span>
      <h1 className="task-instructions__title">{task.title}</h1>
      <p className="task-instructions__description">{task.description}</p>
      <h2 className="task-instructions__subheading">Requirements</h2>
      <ol className="task-instructions__list">
        {task.instructions.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
      <TopicLinks topics={task.topics ?? []} />
    </div>
  );
}
