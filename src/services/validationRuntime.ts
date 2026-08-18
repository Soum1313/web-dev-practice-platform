import type { ValidationTest } from "../types/validation";

// Defines the ValidationContext helpers inside the iframe. Kept as a plain
// function (not arrow, not using outer closures) so `.toString()` produces
// valid standalone source to embed in the harness script.
function buildValidationContext() {
  function resolve(target: unknown): Element | null {
    if (typeof target === "string") return document.querySelector(target);
    return (target as Element) ?? null;
  }

  function fireEvent(el: Element, type: string) {
    el.dispatchEvent(new Event(type, { bubbles: true, cancelable: true }));
  }

  function nativeValueSetter(el: Element, value: string) {
    const proto = Object.getPrototypeOf(el);
    const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
    if (descriptor && descriptor.set) {
      descriptor.set.call(el, value);
    } else {
      (el as HTMLInputElement).value = value;
    }
  }

  return {
    qs: (selector: string) => document.querySelector(selector),
    qsa: (selector: string) => Array.prototype.slice.call(document.querySelectorAll(selector)),
    click: (target: unknown) => {
      const el = resolve(target);
      if (!el) throw new Error("Element not found: " + target);
      (el as HTMLElement).click();
    },
    type: (target: unknown, value: string) => {
      const el = resolve(target);
      if (!el) throw new Error("Element not found: " + target);
      nativeValueSetter(el, value);
      fireEvent(el, "input");
      fireEvent(el, "change");
    },
    select: (target: unknown, value: string) => {
      const el = resolve(target);
      if (!el) throw new Error("Element not found: " + target);
      (el as HTMLSelectElement).value = value;
      fireEvent(el, "change");
    },
    submitForm: (target: unknown) => {
      const el = resolve(target) as HTMLFormElement | null;
      if (!el) throw new Error("Form not found: " + target);
      if (el.requestSubmit) {
        el.requestSubmit();
      } else {
        fireEvent(el, "submit");
      }
    },
    computedStyle: (target: unknown, property: string) => {
      const el = resolve(target);
      if (!el) return null;
      return (window.getComputedStyle(el) as unknown as Record<string, string>)[property] ?? null;
    },
    text: (target: unknown) => {
      const el = resolve(target);
      return el ? (el.textContent ?? "").trim() : null;
    },
    isVisible: (target: unknown) => {
      const el = resolve(target);
      if (!el) return false;
      const style = window.getComputedStyle(el);
      return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
    },
    wait: (ms: number) => new Promise((r) => setTimeout(r, ms)),
    doc: document,
    win: window,
  };
}

/**
 * Builds the <script> source injected into a validation iframe: defines
 * the context helpers, runs the given test's `run` function once the page
 * has finished loading (so the student's own script has already executed),
 * and reports the outcome back to the host via postMessage.
 */
export function buildHarnessScript(test: ValidationTest): string {
  const ctxSource = buildValidationContext.toString();
  const runSource = test.run.toString();

  return `
(function () {
  var buildCtx = ${ctxSource};
  var runTest = ${runSource};

  function post(message) {
    try {
      window.parent.postMessage(message, "*");
    } catch (e) {
      // ignore
    }
  }

  window.addEventListener("load", function () {
    setTimeout(function () {
      try {
        var ctx = buildCtx();
        Promise.resolve(runTest(ctx))
          .then(function (outcome) {
            if (typeof outcome === "boolean") outcome = { pass: outcome };
            post({
              type: "validation-result",
              pass: !!(outcome && outcome.pass),
              message: (outcome && outcome.message) || null,
            });
          })
          .catch(function (err) {
            post({
              type: "validation-result",
              pass: false,
              message: null,
              error: String((err && err.message) || err),
            });
          });
      } catch (err) {
        post({
          type: "validation-result",
          pass: false,
          message: null,
          error: String((err && err.message) || err),
        });
      }
    }, 30);
  });
})();
`;
}
