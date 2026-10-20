import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import SiteLink from "@/components/ui/SiteLink";
import SubHeading from "@/components/ui/SubHeading";
import { toolCards } from "@/data/features-v3";
import { cx, img } from "@/lib/utils";

/** "Comprehensive Trading Tools" cards (the features-v5 section). */
export default function ToolsSection() {
  return (
    <section className="features-v5">
      <div className="container">
        <div className="features-v5-wrap">
          <div className="features-v5-top">
            <ShortTag label="Our Features" />
            <SectionHeading>Comprehensive Trading Tools Keys Added</SectionHeading>
            <SubHeading>
              From alert to resolution, give your team everything they need to respond quickly, reduce downtime, and
              keep customers in the loop
            </SubHeading>
          </div>
          <div className="features-v5-bottom">
            {toolCards.map((card) => (
              <div className="features-v5-list-wrap reveal-up-blur" id={card.id} key={card.title}>
                <div className="features-v5-list">
                  <div className="features-v5-top-text">
                    <h4 className="h4">{card.title}</h4>
                    <p className="p-text-03 text-white-60">{card.text}</p>
                    <SiteLink className="get-started-btn-wrap inline-block" href="/contact">
                      <div className="ger-start-btn-box">
                        <div className="get-start-text">Explore</div>
                        <img alt="" className="get-start-btn-icon" loading="lazy" src={img("arrow-right-02.svg")} />
                      </div>
                      <div className="btn-line" />
                    </SiteLink>
                  </div>
                  <div className={cx("features-v5-bottom-image", card.overlay && "_01")}>
                    <img alt="" className="fit-cover _002" loading="lazy" src={img(card.image)} />
                    {card.overlay && (
                      <img alt="" className="freatures-absolute-image reveal-right" loading="lazy" src={img(card.overlay)} />
                    )}
                  </div>
                </div>
                <div className="features-v5-shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
