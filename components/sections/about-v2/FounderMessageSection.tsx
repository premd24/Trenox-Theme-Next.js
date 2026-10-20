import { founderMemo } from "@/data/about-v2";
import { img } from "@/lib/utils";

export default function FounderMessageSection() {
  return (
    <section className="founder-message">
      <div className="container container-shadow">
        {/* Straightens out of a slight skew as it scrolls through the viewport. */}
        <div className="founder-message-wrap reveal-up-blur" data-scrub="unskew">
          <div className="founder-message-main-wrap">
            <div className="message-details">
              <h3 className="h3 margin-bottom-18">Founder Memo</h3>
              {founderMemo.map((paragraph, i) => (
                <p className="p-text-01 text-white-60" key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="founder-info-wrap">
              <div className="founder-name-image">
                <div className="founder-image">
                  <img alt="" className="fit-cover" loading="lazy" src={img("Founder.avif")} />
                </div>
                <div className="founder-name-wrap">
                  <div className="p-text-02 text-linear-primary">Andro Billin</div>
                  <div className="p-text-03">Maker of Youflow</div>
                </div>
              </div>
              <div className="founder-sign">
                <div className="founder-name-sign bg-primary-gradient v1">Andro Billin</div>
                <div className="vertical-lineer v2" />
                <div className="p-text-03">Signature</div>
              </div>
            </div>
          </div>
          <div className="founder-message-shadow" />
        </div>
        <div className="founder-shadow" />
      </div>
    </section>
  );
}
