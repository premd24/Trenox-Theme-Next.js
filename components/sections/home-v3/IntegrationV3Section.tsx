import { PrimaryButton } from "@/components/ui/Buttons";
import { img } from "@/lib/utils";

/** Full-bleed integration banner whose image opens like a curtain on scroll. */
export default function IntegrationV3Section() {
  return (
    <section className="integration-v3" data-scrub="curtain">
      <div className="integration-v3-wrap">
        <div className="integration-v3-top">
          <div className="heading-wrap reveal-rise-lg">
            <h2 className="h1">Streamline Everything with One Integration.</h2>
          </div>
        </div>
        <div className="integration-v3-bottom reveal-grow">
          <img alt="" className="fit-cover integration-image" loading="lazy" src={img("Integration-V3.avif")} />
        </div>
        <div className="integration-v3-button">
          <div className="sub-heading-wrap reveal-rise">
            <p className="p-text-01 text-white-70">
              Effortlessly tailor your business journey with Trenox’s intuitive dashboard—powered by a robust suite of
              tools, all at your fingertips.
            </p>
          </div>
          <PrimaryButton className="features-02-button reveal-up-blur" href="/contact">
            Explore Now
          </PrimaryButton>
        </div>
      </div>
      <div className="integration-v3-bg">
        <img alt="" className="fit-cover" loading="lazy" src={img("home-3.avif")} />
      </div>
    </section>
  );
}
