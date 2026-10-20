import SectionHeading from "@/components/ui/SectionHeading";
import { solutionTabs } from "@/data/features-v1";
import { useTabs } from "@/hooks/useTabs";
import { cx, img } from "@/lib/utils";

const tabKeys = solutionTabs.map((tab) => tab.key);

/** Tabbed dashboard preview: each tab swaps the screenshot below. */
export default function SolutionsSection() {
  const { active, tabProps } = useTabs(tabKeys);

  return (
    <section className="solutions">
      <div className="container">
        <div className="solutions-wrap">
          <div className="solutions-top">
            <SectionHeading>Smart Solutions Designed for Your Trading Success</SectionHeading>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01 text-white-60">
                Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of
                powerful tools at your fingertips.
              </p>
            </div>
          </div>
          <div className="solutions-bottom">
            <div className="tabs">
              <div className="home-hero-03-tab-menu tab-menu reveal-up-blur" role="tablist">
                {solutionTabs.map((tab) => (
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
                {solutionTabs.map((tab) => (
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
