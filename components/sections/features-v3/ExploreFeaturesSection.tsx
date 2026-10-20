import { useState } from "react";
import { exploreFeatures, type ExploreFeature } from "@/data/features-v3";
import { useCollapse } from "@/hooks/useCollapse";
import { cx, img } from "@/lib/utils";

/**
 * "Explore our features": an exclusive accordion paired with illustration
 * panes. One row is always open; clicking the open row keeps it open.
 */
export default function ExploreFeaturesSection() {
  const [openKey, setOpenKey] = useState(exploreFeatures[0].key);

  return (
    <section className="features-v6">
      <div className="container">
        <div className="features-v6-wrap">
          <div className="features-v6-top">
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">Explore our features, without losing compliance</h2>
            </div>
          </div>
          <div className="features-v6-bottom">
            <div className="features-v6-bottom-wrap tabs">
              <div className="features-v6-left tab-menu reveal-up-blur">
                {exploreFeatures.map((feature) => (
                  <FeatureRow
                    feature={feature}
                    key={feature.key}
                    onSelect={() => setOpenKey(feature.key)}
                    open={openKey === feature.key}
                  />
                ))}
              </div>
              <div className="features-v6-right tab-content reveal-up-blur">
                {exploreFeatures.map((feature) => (
                  <div className={cx("tab-pane", openKey === feature.key && "is-active")} key={feature.key}>
                    <FeaturePane pane={feature.pane} />
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

type FeatureRowProps = { feature: ExploreFeature; open: boolean; onSelect: () => void };

/** A row whose description slides open by animating its height. */
function FeatureRow({ feature, open, onSelect }: FeatureRowProps) {
  const panelProps = useCollapse(open);
  // only the resting state (inline, so a closing row keeps its height until
  // useCollapse animates it); useCollapse drives the height from then on
  const [initialStyle] = useState({ height: open ? "auto" : 0 });

  return (
    <button
      aria-expanded={open}
      className="features-v6-tab-menu inline-block tab-link"
      onClick={onSelect}
      type="button"
    >
      <div className={feature.titleClassName}>{feature.title}</div>
      <div
        className="features-v6-tab-menu-text"
        data-accordion-panel="1"
        style={initialStyle}
        {...panelProps}
      >
        <p className="p-text-03 v1">
          {feature.text}
          {feature.strong && (
            <>
              {" "}
              <strong>{feature.strong}</strong>
            </>
          )}
        </p>
        {feature.line && (
          <div className="get-started-btn-wrap">
            <div className="btn-line" />
          </div>
        )}
      </div>
    </button>
  );
}

function FeaturePane({ pane }: { pane: ExploreFeature["pane"] }) {
  return (
    <div className="features-v6-right-main">
      {"overlay" in pane ? (
        <div className="features-v6-right-tab">
          <img alt="" className="fit-cover" loading="lazy" src={img(pane.image)} />
          <img alt="" className="features-v6-absolute-image" loading="lazy" src={img(pane.overlay)} />
        </div>
      ) : (
        <div className={cx("features-v6-right-tab", pane.tabClassName)}>
          <div className={cx("features-image-wrap", pane.frameClassName)}>
            <img alt="" className="fit-cover" loading="lazy" src={img(pane.image)} />
          </div>
        </div>
      )}
      <div className="features-v6-right-shadow" />
    </div>
  );
}
