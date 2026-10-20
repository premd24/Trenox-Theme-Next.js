import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from "react";

const CLOSE_DELAY = 200;

/**
 * Open/close state for a dropdown: hover with a pointer, click on touch, and
 * closes on Escape, outside click or focus leaving it.
 */
export function useDropdown<Root extends HTMLElement = HTMLDivElement>() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<Root>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const hoverable = useRef(false);

  useEffect(() => {
    hoverable.current = window.matchMedia("(hover: hover)").matches;
    return () => window.clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: globalThis.MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const show = () => {
    window.clearTimeout(timer.current);
    setOpen(true);
  };

  return {
    open,
    rootProps: {
      ref: rootRef,
      onMouseEnter: () => {
        if (hoverable.current) show();
      },
      onMouseLeave: () => {
        if (hoverable.current) timer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
      },
      onBlur: (e: FocusEvent) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      },
    },
    toggleProps: {
      ref: toggleRef,
      "aria-expanded": open,
      onClick: (e: MouseEvent) => {
        e.preventDefault();
        if (open) setOpen(false);
        else show();
      },
    },
  };
}
