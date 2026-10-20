import type { MouseEvent } from "react";

/**
 * The company card's glow follows the cursor: mouse position becomes the
 * `--glow-x` / `--glow-y` percentages the stylesheet translates the glow by.
 */
export function useCursorGlow() {
  return {
    onMouseMove: (e: MouseEvent<HTMLElement>) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--glow-x", `${(((e.clientX - r.left) / r.width) * 100).toFixed(2)}%`);
      card.style.setProperty("--glow-y", `${(((e.clientY - r.top) / r.height) * 100).toFixed(2)}%`);
    },
  };
}
