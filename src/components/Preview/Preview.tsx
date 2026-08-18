import { forwardRef } from "react";
import "./Preview.css";

type PreviewProps = {
  srcDoc: string;
};

// Deliberately no "allow-same-origin": combined with "allow-scripts" that
// would let student code reach back into the platform's origin (spec
// Section 2.2 / 27). "allow-forms"/"allow-modals" keep form submissions and
// alert/confirm/prompt working for exercises that use them.
export const Preview = forwardRef<HTMLIFrameElement, PreviewProps>(({ srcDoc }, ref) => {
  return (
    <div className="preview">
      <iframe
        ref={ref}
        className="preview__frame"
        title="Student preview"
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-forms allow-modals"
      />
    </div>
  );
});

Preview.displayName = "Preview";
