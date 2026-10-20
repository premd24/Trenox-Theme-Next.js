import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type SubHeadingProps = { children: ReactNode; className?: string };

/** Muted lead paragraph under a section heading. */
export default function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <div className={cx("sub-heading-wrap", className, "reveal-rise")}>
      <p className="p-text-02 text-white-70">{children}</p>
    </div>
  );
}
