import RollingCounter from "@/components/sections/about-shared/RollingCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutStats } from "@/data/about-v1";
import { img } from "@/lib/utils";

export default function AboutUsSection() {
  return (
    <section className="about-us-v1">
      <div className="container">
        <div className="about-us-v1-wrap">
          <div className="about-us-v1-top">
            <SectionHeading className="about-us-v1-heading">What we do?</SectionHeading>
            <div className="sub-heading-wrap about-us-v1-sub-heading reveal-rise">
              <p className="p-text-02 text-white-70">
                In 2019, we launched Public, an investing platform with a mission to give people every opportunity to
                grow their wealth. We started by introducing the world to fractional investing. Then, we set our sights
                on creating a new kind of multi-asset investing experience.
                <br />
                <br />
                Today, you can build and diversify your Public portfolio with stocks, bonds, treasuries, ETFs, crypto,
                and more—with even more investment opportunities coming soon. At every step, you get the tools, data,
                and AI-powered insights you need to make informed investment decisions.
              </p>
            </div>
          </div>
          <div className="about-us-v1-bottom">
            {aboutStats.map((stat) => (
              <div className="about-us-content-list reveal-up-blur" key={stat.label}>
                <div className="about-us-content-list-main">
                  <div className="sucesss-box-v3">
                    <RollingCounter className="v1" digitClassName="h2" parts={stat.counter} symbol="h2" />
                    <div className="p-text-02">{stat.label}</div>
                  </div>
                  <div className="success-image-v3">
                    <img alt="" className="fit-cover" loading="lazy" src={img(stat.image)} />
                  </div>
                  <div className="about-us-content-bg reveal-unblur">
                    <img alt="" className="fit-cover radius-24" loading="lazy" src={img("About-1.avif")} />
                  </div>
                </div>
                <div className="about-image-box-shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="linear-bg-v1" />
    </section>
  );
}
