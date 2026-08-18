import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { TaskInstructions } from "../../components/TaskInstructions/TaskInstructions";
import { FileTabs } from "../../components/FileTabs/FileTabs";
import { CodeEditor } from "../../components/CodeEditor/CodeEditor";
import { Preview } from "../../components/Preview/Preview";
import { Console, type ConsoleEntry } from "../../components/Console/Console";
import { Timer } from "../../components/Timer/Timer";
import { ResetButton } from "../../components/ResetButton/ResetButton";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { getTaskById } from "../../data/tasks";
import { useTaskProgress } from "../../hooks/useTaskProgress";
import { useTimer } from "../../hooks/useTimer";
import { usePreview } from "../../hooks/usePreview";
import type { PreviewMessage } from "../../types/preview";
import type { Task, TaskFiles } from "../../types/task";
import "./TaskWorkspacePage.css";

let consoleEntryId = 0;

export function TaskWorkspacePage() {
  const { taskId } = useParams<{ taskId: string }>();
  const task = taskId ? getTaskById(taskId) : undefined;

  if (!task) {
    return (
      <div className="workspace">
        <Header />
        <div className="workspace__not-found">
          <h1>Task not found</h1>
          <p>This task doesn't exist or may have been removed.</p>
          <Link to="/">Back to tasks</Link>
        </div>
      </div>
    );
  }

  return <TaskWorkspace key={task.id} task={task} />;
}

function TaskWorkspace({ task }: { task: Task }) {
  const { progress, updateFile, startTask, resetTask, submitTask } = useTaskProgress(task);
  const [activeFile, setActiveFile] = useState<keyof TaskFiles>("index.html");
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const timer = useTimer(progress, task.timeLimit);
  const { srcDoc, rebuildNow } = usePreview(progress.files);

  const handleRebuild = useCallback(() => {
    setConsoleEntries([]);
    rebuildNow();
  }, [rebuildNow]);

  useEffect(() => {
    // A fresh iframe document is loading; drop stale console output from the
    // previous run rather than mixing old and new logs together.
    setConsoleEntries([]);
  }, [srcDoc]);

  useEffect(() => {
    function handleMessage(event: MessageEvent<PreviewMessage>) {
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) {
        return;
      }
      const data = event.data;
      if (!data || typeof data !== "object") return;

      if (data.type === "console") {
        setConsoleEntries((prev) => [
          ...prev,
          { id: consoleEntryId++, kind: data.level, text: data.args.join(" ") },
        ]);
      } else if (data.type === "runtime-error") {
        const location = [data.source, data.line, data.column].filter(Boolean).join(":");
        setConsoleEntries((prev) => [
          ...prev,
          {
            id: consoleEntryId++,
            kind: "runtime-error",
            text: location ? `${location}\n${data.message}` : data.message,
          },
        ]);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const isSubmitted = progress.status === "submitted";
  const isNotStarted = progress.status === "not-started";

  return (
    <div className="workspace">
      <Header
        right={
          !isNotStarted ? (
            <>
              <Timer timer={timer} />
              <ResetButton onConfirm={resetTask} />
              <SubmitButton disabled={isSubmitted} onConfirm={submitTask} />
            </>
          ) : undefined
        }
      />

      {isNotStarted ? (
        <StartScreen task={task} onStart={startTask} />
      ) : (
        <div className="workspace__body">
          <div className="workspace__panel workspace__instructions">
            <TaskInstructions task={task} />
            {isSubmitted && (
              <div className="workspace__submitted-banner">
                Task Submitted ✓ — Time: {formatSubmittedTime(progress)}
              </div>
            )}
          </div>

          <div className="workspace__panel workspace__editor">
            <FileTabs activeFile={activeFile} onSelect={setActiveFile} />
            <CodeEditor
              fileName={activeFile}
              value={progress.files[activeFile]}
              onChange={(value) => updateFile(activeFile, value)}
            />
            <div className="workspace__run-bar">
              <button className="workspace__run-button" onClick={handleRebuild}>
                ▶ Run
              </button>
            </div>
          </div>

          <div className="workspace__panel workspace__preview">
            <Preview ref={iframeRef} srcDoc={srcDoc} />
          </div>

          <div className="workspace__console">
            <Console entries={consoleEntries} onClear={() => setConsoleEntries([])} />
          </div>
        </div>
      )}
    </div>
  );
}

function formatSubmittedTime(progress: { elapsedAtSubmit: number | null }): string {
  if (progress.elapsedAtSubmit == null) return "--:--";
  const totalSeconds = Math.floor(progress.elapsedAtSubmit / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function StartScreen({ task, onStart }: { task: Task; onStart: () => void }) {
  return (
    <div className="workspace__start">
      <span className="workspace__start-eyebrow">{task.id}</span>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button className="workspace__start-button" onClick={onStart}>
        Start Task
      </button>
    </div>
  );
}
