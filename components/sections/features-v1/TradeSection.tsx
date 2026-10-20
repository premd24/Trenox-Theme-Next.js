import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { img } from "@/lib/utils";

export default function TradeSection() {
  return (
    <section className="trade">
      <div className="container">
        <div className="trade-wrap">
          <div className="trade-top">
            <SectionHeading>Trade Against and More</SectionHeading>
            <SubHeading>Our financial management platform is transforming the way people manage their money.</SubHeading>
          </div>
          <div className="trade-bottom">
            <div className="trade-left">
              <div className="trade-left-content reveal-up-blur">
                <div className="trade-left-main-content">
                  <div className="trade-text-wrap">
                    <h4 className="h4">Fast Payouts</h4>
                    <p className="p-text-03 text-white-60">You can withdraw profits in 7 days.</p>
                  </div>
                  <div className="trade-image-wrap">
                    <img alt="" className="fit-cover" loading="lazy" src={img("Trade.avif")} />
                  </div>
                  <div className="trade-left-content-bg reveal-unblur">
                    <img alt="" className="fit-cover border-radius-27-56" loading="lazy" src={img("features-7.avif")} />
                  </div>
                </div>
                <div className="trade-left-content-shadow" />
              </div>
              <div className="trade-left-content v2 reveal-up-blur">
                <div className="trade-left-main-content v2">
                  <div className="trade-left-content-bg _01 reveal-unblur">
                    <img alt="" className="fit-cover border-radius-27-56" loading="lazy" src={img("features-7.avif")} />
                  </div>
                  <div className="trade-text-wrap-02">
                    <h4 className="h4">Best Trading Conditions</h4>
                    <div className="p-text-03">Empowering traders worldwide with top tier resource.</div>
                  </div>
                  <div className="trade-image-wrap-02">
                    <img alt="" className="fit-cover trade-image-02" loading="lazy" src={img("body_1.avif")} />
                  </div>
                </div>
                <div className="trade-left-content-shadow v2" />
              </div>
            </div>
            <div className="trade-right reveal-up-blur">
              <div className="features-v4-right-list">
                <div className="features-v4-right-top">
                  <h4 className="h4">Multiple Tradings Platforms</h4>
                  <h5 className="h5 sub-heading">Trade on our main label MT5, cTrader, Match-Trader &amp; Tradelocker</h5>
                  <p className="p-text-03 text-white-70">
                    Our Metaquotes license and mainlabel platforms provide a superior experience with enhanced security
                    and operational efficiency.
                  </p>
                </div>
                <div className="features-v4-right-bottom v2">
                  <img alt="" className="fit-cover _01 reveal-up" loading="lazy" src={img("Symbol-Icon.svg")} />
                  <img
                    alt=""
                    className="features-absolute-image v4 reveal-grow"
                    loading="lazy"
                    src={img("Features-Image-2.avif")}
                  />
                </div>
                <div className="features-v4-left-bg reveal-unblur">
                  <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("features-3.avif")} />
                </div>
              </div>
              <div className="features-v4-box-shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
