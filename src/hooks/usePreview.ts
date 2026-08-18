import { useCallback, useEffect, useRef, useState } from "react";
import type { TaskFiles } from "../types/task";
import { composeDocument } from "../services/preview";

const DEBOUNCE_MS = 250;

/**
 * Debounced preview builder: rebuilds the composed srcdoc shortly after
 * files stop changing, with an immediate `rebuildNow` escape hatch for the
 * manual Run button (spec Section 14).
 */
export function usePreview(files: TaskFiles) {
  const [srcDoc, setSrcDoc] = useState(() => composeDocument(files));
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSrcDoc(composeDocument(files));
    }, DEBOUNCE_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [files]);

  const rebuildNow = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setSrcDoc(composeDocument(files));
  }, [files]);

  return { srcDoc, rebuildNow };
}
