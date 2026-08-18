import { lazy, Suspense } from "react";
import type { TaskFiles } from "../../types/task";
import "./CodeEditor.css";

// Lazy-loaded so Monaco's ~2-3MB core doesn't bloat the initial bundle
// (spec Section 5).
const Editor = lazy(() => import("@monaco-editor/react"));

const LANGUAGE_BY_FILE: Record<keyof TaskFiles, string> = {
  "index.html": "html",
  "style.css": "css",
  "script.js": "javascript",
};

type CodeEditorProps = {
  fileName: keyof TaskFiles;
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ fileName, value, onChange }: CodeEditorProps) {
  return (
    <div className="code-editor">
      <Suspense fallback={<div className="code-editor__loading">Loading editor…</div>}>
        <Editor
          height="100%"
          language={LANGUAGE_BY_FILE[fileName]}
          value={value}
          theme="vs-dark"
          onChange={(next) => onChange(next ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
          }}
        />
      </Suspense>
    </div>
  );
}
