import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

/** Lenis smooth scrolling for the whole window. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <AnchorLinks />
      {children}
    </ReactLenis>
  );
}

/**
 * Glides to in-page "#section" targets instead of jumping. Runs in the capture
 * phase so the browser's (and next/link's) instant jump is cancelled first.
 */
function AnchorLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank") return;

      // next/link renders "#pricing" as "/#pricing", so compare resolved URLs.
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      // Bare "#" links are placeholders for pages this project doesn't have.
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        return;
      }
      const hash = url.hash;
      if (!hash) return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      // Lazy images above the target can load mid-glide and push it down, so
      // re-aim once we land (a couple of times at most).
      let retries = 2;
      const glide = () =>
        lenis.scrollTo(target, {
          onComplete: () => {
            if (retries-- > 0 && Math.abs(target.getBoundingClientRect().top) > 1) glide();
          },
        });
      glide();
      // Keep Next's history state so back/forward still work.
      history.replaceState(history.state, "", hash);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [lenis]);

  return null;
}
