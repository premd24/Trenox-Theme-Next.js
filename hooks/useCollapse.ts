import { useEffect, useRef, type TransitionEvent } from "react";

/**
 * Animates a panel's height open/closed (the template's accordion slide).
 * Spread `panelProps` on the panel; it must start with `style={{ height: 0 }}`
 * unless `initiallyOpen`.
 */
export function useCollapse<T extends HTMLElement = HTMLDivElement>(open: boolean) {
  const ref = useRef<T>(null);
  const mounted = useRef(false);

  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    // from `auto` back to a number first, so the transition has something to run
    panel.style.height = `${panel.scrollHeight}px`;
    if (!open) {
      void panel.offsetHeight;
      panel.style.height = "0px";
    }
  }, [open]);

  return {
    ref,
    onTransitionEnd: (e: TransitionEvent<T>) => {
      if (e.target === e.currentTarget && e.propertyName === "height" && open) {
        e.currentTarget.style.height = "auto";
      }
    },
  };
}
