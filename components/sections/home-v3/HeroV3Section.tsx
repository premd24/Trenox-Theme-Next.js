import { OutlineButton, PrimaryButton } from "@/components/ui/Buttons";
import ShortTag from "@/components/ui/ShortTag";
import { heroTabKeys, heroTabs } from "@/data/home-v3";
import { useTabs } from "@/hooks/useTabs";
import { cx, img } from "@/lib/utils";

/** Hero with a tab strip that switches the dashboard screenshot below it. */
export default function HeroV3Section() {
  const { active, tabProps } = useTabs(heroTabKeys);

  return (
    <section className="home-hero-v3">
      <div className="container">
        <div className="home-hero-v3-wrap">
          <div className="home-hero-v3-top">
            <ShortTag label="Introducing our Insights" />
            <div className="heading-wrap reveal-rise-lg">
              <h1 className="h1">Strategic Tools to Reach Your Trading Goals</h1>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01 text-white-60">
                Customize your business journey effortlessly with Trenox&apos;s dashboard, backed by a suite of powerful
                tools at your fingertips.
              </p>
            </div>
            <div className="hove-v3-button-wrap reveal-up-blur">
              <PrimaryButton href="/contact">Get Started</PrimaryButton>
              <OutlineButton href="/contact">Learn More</OutlineButton>
            </div>
          </div>
          <div className="home-hero-v3-bottom">
            <div className="tabs">
              <div className="home-hero-03-tab-menu tab-menu reveal-up-blur" role="tablist">
                {heroTabs.map((tab) => (
                  <a
                    className={cx("hero-03-menu-link inline-block tab-link", active === tab.key && "is-active")}
                    key={tab.key}
                    {...tabProps(tab.key)}
                  >
                    <div className="hero-03-menu-link-wrap">
                      <div className="hero-03-menu-main-link">
                        <div className="icon-image-wrapper">
                          {tab.icons.map((icon) => (
                            <img alt="" className="icon-tab" key={icon} loading="lazy" src={img(icon)} />
                          ))}
                        </div>
                        <div className="h5">{tab.label}</div>
                      </div>
                    </div>
                    <div className="hero-03-menu-link-shadow" />
                  </a>
                ))}
              </div>
              <div className="hero-03-tab-content tab-content reveal-up-blur">
                {heroTabs.map((tab) => (
                  <div className={cx("tab-pane", active === tab.key && "is-active")} key={tab.key}>
                    <div className="hero-v3-image-wrap">
                      <img alt="" className="fit-cover v1-image" loading="lazy" src={img(tab.image)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
