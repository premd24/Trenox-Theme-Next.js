import { useRef, useState, type KeyboardEvent } from "react";

/**
 * Tab state with the template's keyboard support (←/→ move, Enter/Space pick).
 * `tabProps(key)` goes on each tab button/link; check `active` for the panes.
 */
export function useTabs<K extends string>(keys: readonly K[], initial: K = keys[0]) {
  const [active, setActive] = useState<K>(initial);
  const refs = useRef(new Map<K, HTMLElement>());

  const select = (key: K, focus = false) => {
    setActive(key);
    if (focus) refs.current.get(key)?.focus();
  };

  const tabProps = (key: K) => ({
    role: "tab" as const,
    "aria-selected": active === key,
    tabIndex: active === key ? 0 : -1,
    ref: (el: HTMLElement | null) => {
      if (el) refs.current.set(key, el);
      else refs.current.delete(key);
    },
    onClick: (e: { preventDefault(): void }) => {
      e.preventDefault();
      select(key);
    },
    onKeyDown: (e: KeyboardEvent) => {
      const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (step) {
        e.preventDefault();
        const i = keys.indexOf(key);
        select(keys[(i + step + keys.length) % keys.length], true);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(key);
      }
    },
  });

  return { active, select, tabProps };
}
