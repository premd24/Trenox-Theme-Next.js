import { Fragment } from "react";
import { ratingStars, stats, type CounterPart } from "@/data/home";
import { cx, img } from "@/lib/utils";

export default function SuccessRateSection({ className }: { className?: string }) {
  return (
    <section className={cx("success-rate", className)}>
      <div className="container">
        <div className="success-rate-wrap reveal-up-blur">
          <div className="success-rate-top">
            <div className="caption-linear-bg top-rate-title reveal-grow">
              <div className="p-text-01 reveal-left">Excellent</div>
              <div className="success-rate-icon-02">
                {ratingStars.map((star, i) => (
                  <img alt="" className={`${star.className} reveal-left`} key={i} loading="lazy" src={img(star.src)} />
                ))}
              </div>
              <div className="success-rate-icon-01">
                <img alt="" className="fit-cover reveal-left" loading="lazy" src={img("Title-Logo.svg")} />
              </div>
            </div>
          </div>
          <div className="success-rate-bottom">
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="horizontal-line-linear hide-mobile" />}
                <div className="success-rate-box">
                  <div className="count-wrap count-roll">
                    {stat.counter.map((part, j) => (
                      <CounterPiece key={j} part={part} />
                    ))}
                  </div>
                  <div className="p-text-01 text-white-70">{stat.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A rolling digit column, or a static symbol such as "+" or "K". */
function CounterPiece({ part }: { part: CounterPart }) {
  if ("symbol" in part) return <h3 className="h3 text-primary">{part.symbol}</h3>;
  return (
    <div className={`counter-single-wrap ${part.roll}`}>
      {part.digits.map((digit, i) => (
        <p className="counter-number" key={i}>
          {digit}
        </p>
      ))}
    </div>
  );
}
