import type { TaskFiles } from "../types/task";

// Injected as the first <script> in <head> so console/error capture is active
// before any of the student's own inline or external scripts run.
const CONSOLE_SHIM = `
(function () {
  function serialize(arg) {
    try {
      if (typeof arg === "string") return arg;
      if (arg instanceof Error) return arg.stack || (arg.name + ": " + arg.message);
      return JSON.stringify(arg, null, 2);
    } catch (e) {
      try {
        return String(arg);
      } catch (e2) {
        return "[Unserializable value]";
      }
    }
  }

  function post(message) {
    try {
      window.parent.postMessage(message, "*");
    } catch (e) {
      // ignore
    }
  }

  ["log", "warn", "error"].forEach(function (level) {
    var original = console[level] ? console[level].bind(console) : function () {};
    console[level] = function () {
      var args = Array.prototype.slice.call(arguments).map(serialize);
      post({ type: "console", level: level, args: args });
      original.apply(console, arguments);
    };
  });

  window.addEventListener("error", function (event) {
    post({
      type: "runtime-error",
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno
    });
  });

  window.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    var message = reason instanceof Error ? (reason.message || String(reason)) : String(reason);
    post({
      type: "runtime-error",
      message: "Uncaught (in promise) " + message
    });
  });

  post({ type: "ready" });
})();
`;

function isScriptJsSrc(src: string | null): boolean {
  if (!src) return false;
  const normalized = src.trim().toLowerCase().replace(/^\.?\/+/, "");
  return normalized === "script.js";
}

/**
 * Composes the student's index.html, style.css, and script.js into a single
 * self-contained HTML document string suitable for an iframe's `srcdoc`.
 *
 * See spec Section 2.1 / 12: style.css is injected into <head>, script.js
 * replaces the content of any <script src="script.js"> tag(s) (or is
 * appended before </body> if no such tag exists), and a console/error
 * capture shim is injected first so student code can't outrun it.
 */
export function composeDocument(files: TaskFiles): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(files["index.html"], "text/html");

  let head = doc.querySelector("head");
  if (!head) {
    head = doc.createElement("head");
    doc.documentElement.insertBefore(head, doc.documentElement.firstChild);
  }

  const shimScript = doc.createElement("script");
  shimScript.textContent = CONSOLE_SHIM;
  head.insertBefore(shimScript, head.firstChild);

  const styleTag = doc.createElement("style");
  styleTag.textContent = files["style.css"];
  head.appendChild(styleTag);

  const scriptTags = Array.from(doc.querySelectorAll("script")).filter((tag) =>
    isScriptJsSrc(tag.getAttribute("src"))
  );

  if (scriptTags.length > 0) {
    for (const tag of scriptTags) {
      tag.removeAttribute("src");
      tag.textContent = files["script.js"];
    }
  } else {
    const inlineScript = doc.createElement("script");
    inlineScript.textContent = files["script.js"];
    const body = doc.querySelector("body");
    if (body) {
      body.appendChild(inlineScript);
    } else {
      doc.documentElement.appendChild(inlineScript);
    }
  }

  return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
}
