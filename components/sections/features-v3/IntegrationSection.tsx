import { PrimaryButton } from "@/components/ui/Buttons";
import { img } from "@/lib/utils";

/** Full-bleed integration banner; its background curtains in on scroll. */
export default function IntegrationSection() {
  return (
    <section className="integration-v3 variant-bg-none" data-scrub="curtain">
      <div className="integration-v3-wrap">
        <div className="integration-v3-top">
          <div className="heading-wrap reveal-rise-lg">
            <h1 className="h1">Streamline Everything with One Integration.</h1>
          </div>
        </div>
        <div className="integration-v3-bottom reveal-grow">
          <img
            alt=""
            className="fit-cover integration-image variant-bg-none"
            loading="lazy"
            src={img("Integration-V3.avif")}
          />
        </div>
        <div className="integration-v3-button variant-bg-none">
          <div className="sub-heading-wrap reveal-rise">
            <p className="p-text-01 text-white-70">
              Effortlessly tailor your business journey with Trenox’s intuitive dashboard—powered by a robust suite of
              tools, all at your fingertips.
            </p>
          </div>
          {/* PrimaryButton markup, with this section's extra classes */}
          <PrimaryButton className="features-02-button reveal-up-blur" href="/contact">
            Explore Now
          </PrimaryButton>
        </div>
      </div>
      <div className="integration-v3-bg variant-bg-none">
        <img alt="" className="fit-cover" loading="lazy" src={img("home-3.avif")} />
      </div>
    </section>
  );
}
