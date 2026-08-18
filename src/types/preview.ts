export type ConsoleLevel = "log" | "warn" | "error";

export type PreviewMessage =
  | {
      type: "console";
      level: ConsoleLevel;
      args: string[];
    }
  | {
      type: "runtime-error";
      message: string;
      source?: string;
      line?: number;
      column?: number;
    }
  | {
      type: "ready";
    };
