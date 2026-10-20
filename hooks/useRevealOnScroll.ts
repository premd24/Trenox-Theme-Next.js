import { useEffect } from "react";

// Elements carrying one of these classes start hidden (see the "reveals" block
// in styles/trenox.css) and play their entrance once `.is-in` is added.
const REVEAL_SELECTOR = [
  ".reveal-up-blur",
  ".reveal-rise",
  ".reveal-rise-lg",
  ".reveal-rise-slow",
  ".reveal-up",
  ".reveal-left",
  ".reveal-right",
  ".reveal-up-right",
  ".reveal-grow",
  ".reveal-grow-big",
  ".reveal-shrink",
  ".reveal-unblur",
  ".reveal-hero-bg",
  ".reveal-hero-bg-lg",
  ".count-roll",
  ".float-zoom",
].join(", ");

/**
 * Plays each reveal animation the first time its element scrolls into view.
 * Pass the route so it re-scans the page after client-side navigation.
 */
export function useRevealOnScroll(route: string) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (!targets.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    // Anything already on screen plays straight away: an observer delivers
    // nothing while the tab is hidden, which would leave the first screen blank.
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-in");
      else io.observe(el);
    });

    return () => io.disconnect();
  }, [route]);
}
