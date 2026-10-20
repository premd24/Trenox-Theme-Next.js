import RollingCounter from "@/components/sections/about-shared/RollingCounter";
import ShortTag from "@/components/ui/ShortTag";
import { achievements } from "@/data/about-v3";
import { img } from "@/lib/utils";

export default function AboutV3Hero() {
  return (
    <section className="about-v3-hero">
      <div className="container">
        <div className="about-v3-hero-wrap">
          <div className="about-v3-hero-top">
            <div className="about-v3-heading">
              <ShortTag label="About Us" />
              <div className="heading-wrap about-v3-heading reveal-rise-lg">
                <h1 className="h2">Innovating the Way Traders Build Smarter, Faster Portfolios.</h1>
              </div>
            </div>
            <div className="about-v3-hero-image">
              <img
                alt=""
                className="fit-cover border-radius-24 reveal-shrink"
                loading="lazy"
                src={img("About-V3-Hero.avif")}
              />
            </div>
          </div>
          <div className="about-v3-hero-bottom">
            <div className="about-bottom-left">
              {achievements.map((achievement) => (
                <div className="achievement-wrap reveal-left" key={achievement.label}>
                  <RollingCounter digitClassName="counter-number text-white" parts={achievement.counter} symbol="h3" />
                  <div className="p-text-02 text-white-70">{achievement.label}</div>
                </div>
              ))}
            </div>
            <div className="about-bottom-right reveal-right">
              <p className="p-text-02 text-white-70">
                Easily tailor your business journey with Trenox’s intuitive dashboard  equipped with powerful tools to
                help you manage, grow, and optimize with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
