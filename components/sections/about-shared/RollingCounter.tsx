import type { CounterPart } from "@/data/home";
import { cx } from "@/lib/utils";

type RollingCounterProps = {
  parts: CounterPart[];
  /** Extra class on the `count-wrap` (e.g. "v1"). */
  className?: string;
  /** Class of each digit `<p>` in a rolling column. */
  digitClassName: string;
  /** Heading level used for static symbols such as "+" or "$". */
  symbol: "h2" | "h3";
};

/** A `count-roll` counter: digit columns roll into place when scrolled into view. */
export default function RollingCounter({ parts, className, digitClassName, symbol: Symbol }: RollingCounterProps) {
  return (
    <div className={cx("count-wrap", className, "count-roll")}>
      {parts.map((part, i) =>
        "symbol" in part ? (
          <Symbol className={Symbol} key={i}>
            {part.symbol}
          </Symbol>
        ) : (
          <div className={`counter-single-wrap ${part.roll}`} key={i}>
            {part.digits.map((digit, j) => (
              <p className={digitClassName} key={j}>
                {digit}
              </p>
            ))}
          </div>
        ),
      )}
    </div>
  );
}
