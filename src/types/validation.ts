export type TestVisibility = "public" | "hidden";

export type ValidationOutcome = {
  pass: boolean;
  message?: string;
};

/**
 * Helpers available inside a test's `run` function. This object is
 * reconstructed at runtime *inside the student's iframe* (see
 * services/validationRuntime.ts) - `run` never actually receives this
 * exact object from the host, since functions can't cross the iframe
 * boundary. Keep `run` self-contained (no closures over outside
 * variables) so its source can be safely stringified and re-executed
 * inside the iframe.
 */
export type ValidationContext = {
  qs: (selector: string) => Element | null;
  qsa: (selector: string) => Element[];
  click: (selector: string | Element) => void;
  type: (selector: string | Element, value: string) => void;
  select: (selector: string | Element, value: string) => void;
  submitForm: (selector: string | Element) => void;
  computedStyle: (selector: string | Element, property: string) => string | null;
  text: (selector: string | Element) => string | null;
  isVisible: (selector: string | Element) => boolean;
  wait: (ms: number) => Promise<void>;
  doc: Document;
  win: Window;
};

export type ValidationTest = {
  id: string;
  description: string;
  points: number;
  visibility: TestVisibility;
  hint?: string;
  /** Optional iframe size override, for responsive/viewport-dependent tests. */
  viewport?: { width: number; height: number };
  /** Self-contained function - see ValidationContext's docstring. */
  run: (ctx: ValidationContext) => boolean | ValidationOutcome | Promise<boolean | ValidationOutcome>;
};

export type TestResult = {
  id: string;
  description: string;
  points: number;
  earned: number;
  passed: boolean;
  visibility: TestVisibility;
  message?: string;
  hint?: string;
  error?: string;
};

export type ValidationResult = {
  taskId: string;
  score: number;
  totalPoints: number;
  passedCount: number;
  totalCount: number;
  results: TestResult[];
};
