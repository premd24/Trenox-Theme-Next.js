import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";

type SliderOptions = { count: number; autoplay?: number; duration?: number };

/**
 * A translateX slider: autoplay (paused on hover), prev/next, dots and swipe.
 * Each slide's own width and gutter is measured, so the CSS decides how many
 * show at once.
 */
export function useSlider({ count, autoplay = 0, duration = 500 }: SliderOptions) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const startX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  const position = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children;
    if (slides.length < 2) return;
    const step = slides[1].getBoundingClientRect().left - slides[0].getBoundingClientRect().left;
    track.style.transitionDuration = `${duration}ms`;
    track.style.transform = `translateX(${-index * step}px)`;
  }, [index, duration]);

  useEffect(() => {
    position();
    window.addEventListener("resize", position);
    return () => window.removeEventListener("resize", position);
  }, [position]);

  const stop = useCallback(() => window.clearInterval(timer.current), []);
  const restart = useCallback(() => {
    window.clearInterval(timer.current);
    if (autoplay && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), autoplay);
    }
  }, [autoplay, count]);

  useEffect(() => {
    restart();
    return stop;
  }, [restart, stop]);

  const goAndRestart = (i: number) => {
    go(i);
    restart();
  };

  return {
    index,
    trackRef,
    prev: () => goAndRestart(index - 1),
    next: () => goAndRestart(index + 1),
    goTo: goAndRestart,
    rootProps: {
      onMouseEnter: stop,
      onMouseLeave: restart,
      onTouchStart: (e: TouchEvent) => {
        startX.current = e.touches[0].clientX;
      },
      onTouchEnd: (e: TouchEvent) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) goAndRestart(index + (dx < 0 ? 1 : -1));
        startX.current = null;
      },
    },
  };
}
