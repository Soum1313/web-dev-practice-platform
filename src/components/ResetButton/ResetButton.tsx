import { useState } from "react";
import "./ResetButton.css";

type ResetButtonProps = {
  onConfirm: () => void;
};

export function ResetButton({ onConfirm }: ResetButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="reset-button" onClick={() => setOpen(true)}>
        ↻ Reset Task
      </button>

      {open && (
        <div className="dialog-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="reset-dialog-title">Reset this task?</h2>
            <p>All your current code will be replaced with the original starter code.</p>
            <div className="dialog__actions">
              <button className="dialog__button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button
                className="dialog__button dialog__button--danger"
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
