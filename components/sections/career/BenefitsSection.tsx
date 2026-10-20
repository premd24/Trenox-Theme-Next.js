import { benefits } from "@/data/career";
import { img } from "@/lib/utils";

/** "Perks & Benefits": heading on the left, benefit list on the right. */
export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-wrap">
          <div className="benefits-left reveal-rise-lg">
            <h2 className="h2 text-linear">Perks &amp; Benefits</h2>
          </div>
          <div className="benefits-right">
            {benefits.map((benefit) => (
              <div className="benefits-list reveal-up-blur" key={benefit.title}>
                <div className="icon-box-wrap">
                  <img alt="" loading="lazy" src={img(benefit.icon)} />
                </div>
                <div className="wf-layout-vflex benefits-text-wrap v2">
                  <h5 className="h5">{benefit.title}</h5>
                  <div className="p-text-03 text-white-60">{benefit.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="linear-bg-v1 v2" />
    </section>
  );
}
