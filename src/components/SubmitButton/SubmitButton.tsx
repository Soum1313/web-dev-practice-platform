import { useState } from "react";
import "../ResetButton/ResetButton.css";
import "./SubmitButton.css";

type SubmitButtonProps = {
  disabled?: boolean;
  onConfirm: () => void;
};

export function SubmitButton({ disabled, onConfirm }: SubmitButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="submit-button" disabled={disabled} onClick={() => setOpen(true)}>
        Submit Task
      </button>

      {open && (
        <div className="dialog-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="submit-dialog-title">Submit Task?</h2>
            <p>Your current work will be submitted.</p>
            <div className="dialog__actions">
              <button className="dialog__button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button
                className="dialog__button dialog__button--primary"
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
