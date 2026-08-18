import type { TaskFiles } from "../../types/task";
import "./FileTabs.css";

type FileName = keyof TaskFiles;

const FILE_ORDER: FileName[] = ["index.html", "style.css", "script.js"];

type FileTabsProps = {
  activeFile: FileName;
  onSelect: (file: FileName) => void;
};

export function FileTabs({ activeFile, onSelect }: FileTabsProps) {
  return (
    <div className="file-tabs" role="tablist" aria-label="Student files">
      {FILE_ORDER.map((file) => (
        <button
          key={file}
          role="tab"
          aria-selected={file === activeFile}
          className={`file-tab${file === activeFile ? " file-tab--active" : ""}`}
          onClick={() => onSelect(file)}
        >
          {file}
        </button>
      ))}
    </div>
  );
}
