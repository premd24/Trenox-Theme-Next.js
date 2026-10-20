import { useEffect } from "react";

// Each scroll-linked timeline only runs across its own slice of the element's
// pass through the viewport.
const RANGES: Record<string, [number, number]> = {
  cards: [0.41, 0.57],
  curtain: [0.2, 0.4],
  rail: [0.3, 0.78],
  unskew: [0, 0.5],
  timeline: [0.05, 0.75],
};

/**
 * Drives `[data-scrub="<kind>"]` elements: writes their scroll progress to the
 * `--p-<kind>` custom property the stylesheet animates from. Pass the route so
 * it re-scans the page after client-side navigation.
 */
export function useScrollScrubbers(route: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((el) => el.style.setProperty(`--p-${el.dataset.scrub}`, "1"));
      return;
    }

    // 0 when the element's top meets the viewport bottom, 1 when its bottom
    // meets the viewport top.
    const progress = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const span = r.height + window.innerHeight;
      return Math.min(1, Math.max(0, (window.innerHeight - r.top) / span));
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      nodes.forEach((el) => {
        const kind = el.dataset.scrub ?? "";
        const p = progress(el);
        const [from, to] = RANGES[kind] ?? [0, 1];
        const local = Math.min(1, Math.max(0, (p - from) / (to - from)));
        el.style.setProperty(`--p-${kind}`, local.toFixed(4));

        if (kind === "rail") {
          // light each portrait in turn as the rail travels
          const shots = el.querySelectorAll(".client-image");
          const lit = Math.floor(local * shots.length);
          shots.forEach((s, i) => s.classList.toggle("is-lit", i === lit));
        }
        if (kind === "timeline") el.classList.toggle("is-lit", p >= 0.1);
      });
    };

    const onScroll = () => {
      // rAF is starved while the tab is hidden; update directly instead.
      if (document.hidden) return update();
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [route]);
}
