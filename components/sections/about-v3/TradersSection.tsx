import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { traderRows, type TraderItem } from "@/data/about-v3";
import { img } from "@/lib/utils";

export default function TradersSection() {
  return (
    <section className="traders">
      <div className="container">
        <div className="traders-wrap">
          <div className="traders-top">
            <ShortTag label="What Traders Are Saying" />
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">Real Stories. Real Results.</h2>
            </div>
            <SubHeading className="traders-sub-heading">
              From day traders to portfolio managers, see how Blue Guardian is helping users unlock smarter strategies,
              streamline decisions, and gain a true edge in the market.
            </SubHeading>
          </div>
          <div className="traders-bottom">
            {traderRows.map((row, i) => (
              <div className="traders-row" key={i}>
                {row.map((item, j) => (
                  <TraderTile item={item} key={j} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A company-logo tile or a quote card. */
function TraderTile({ item }: { item: TraderItem }) {
  if (item.kind === "logo") {
    return (
      <div className="traders-item-v1 reveal-rise-lg" id={item.id}>
        <div className="traders-item-v1-wrap">
          <img alt="" loading="lazy" src={img(item.logo)} />
        </div>
        <div className="traders-item-v1-shadow reveal-unblur" />
      </div>
    );
  }
  return (
    <div className="traders-item-v2 reveal-rise" id={item.id}>
      <div className="traders-item-v2-wrap">
        <p className="p-text-01 text-white-70">{item.quote}</p>
        <div className="traders-info-wrap">
          <div className="traders-image-wrap">
            <img alt="" className="fit-cover" loading="lazy" src={img(item.image)} />
          </div>
          <div className="traders-info">
            <div className="p-text-02">{item.name}</div>
            <div className="p-text-03 text-white-60">{item.role}</div>
          </div>
        </div>
      </div>
      <div className="traders-item-v2-shadow reveal-unblur" />
    </div>
  );
}
