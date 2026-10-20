import type { CounterPart } from "@/data/home";
import {
  dedicatedServiceCounter,
  satisfiedClientsCounter,
  trustedQuotes,
  type TrustedQuote,
} from "@/data/home-v2";
import { img } from "@/lib/utils";

/** Bento grid of client quotes and headline numbers. */
export default function TrustedSection() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="trusted-wrap">
          <div className="trusted-top-wrap">
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">Trusted by 6k+people to move business forward</h2>
            </div>
          </div>
          <div className="trusted-bottom-wrap">
            <div className="trusted-row-01">
              <QuoteCard quote={trustedQuotes.top} />
              <div className="trusted-item _01 reveal-up-blur">
                <img
                  alt=""
                  className="trusted-row-bg-01"
                  loading="lazy"
                  src={img("Trusted-Row-Image_1Trusted-Row-Image.avif")}
                />
                <div className="trusted-text-wrap">
                  <Counter parts={satisfiedClientsCounter} />
                  <div className="trusted-item-title">Satisfied Clients</div>
                </div>
                <div className="image-shade" />
              </div>
            </div>
            <div className="trusted-row-02 reveal-up-blur">
              <div className="trusted-shade-wrapper">
                <div className="trusted-item-image">
                  <img
                    alt=""
                    className="trusted-row-bg-02"
                    loading="lazy"
                    src={img("Trusted-Row-Image-02_1Trusted-Row-Image-02.avif")}
                  />
                </div>
                <div className="trusted-02-text-wrap">
                  <div className="trusted-02-top-text">
                    <Counter parts={dedicatedServiceCounter} />
                    <div className="trusted-item-title">Our dedicated service</div>
                  </div>
                  <div className="trusted-02-bottom-text">
                    <h4 className="h4 image">Leave the busy work to us</h4>
                    <p className="p-text-02 image">
                      Keep everyone focused on the big picture, and let Cuppa automate the rest—expenses, accounting,
                      compliance, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-shade _02" />
            </div>
            <div className="trusted-row-03">
              <QuoteCard quote={trustedQuotes.bottomLeft} />
              <QuoteCard quote={trustedQuotes.bottomRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ quote }: { quote: TrustedQuote }) {
  return (
    <div className="trusted-item-list-wraap reveal-up-blur">
      <div className={`trusted-item ${quote.variant}`}>
        <p className="p-text-02">{quote.quote}</p>
        <div className="client-info-02">
          <div className="client-name-01">{quote.name}</div>
          <img alt="" className="star-image" loading="lazy" src={img("Star.svg")} />
        </div>
      </div>
      <div className="border-absolute reveal-unblur" />
    </div>
  );
}

/** Rolling digit columns with static symbols ("+", "/") in between. */
function Counter({ parts }: { parts: CounterPart[] }) {
  return (
    <div className="count-wrap count-roll">
      {parts.map((part, i) =>
        "symbol" in part ? (
          <h3 className="h3" key={i}>
            {part.symbol}
          </h3>
        ) : (
          <div className={`counter-single-wrap ${part.roll}`} key={i}>
            {part.digits.map((digit, j) => (
              <p className="counter-number text-white" key={j}>
                {digit}
              </p>
            ))}
          </div>
        ),
      )}
    </div>
  );
}
