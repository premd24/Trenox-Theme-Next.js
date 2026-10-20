import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type SectionHeadingProps = { children: ReactNode; className?: string };

/** Gradient h2 that rises into view. */
export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cx("heading-wrap", className, "reveal-rise-lg")}>
      <h2 className="h2 text-linear">{children}</h2>
    </div>
  );
}
