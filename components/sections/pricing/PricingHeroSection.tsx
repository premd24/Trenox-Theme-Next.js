import ShortTag from "@/components/ui/ShortTag";

export default function PricingHeroSection() {
  return (
    <section className="hero priceing-hero">
      <div className="container">
        <div className="priceing-hero-01-wrap">
          <ShortTag label="Pricing Plan" />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2">Pricing Plans Built for Every Trader</h1>
          </div>
          <div className="sub-heading-wrap priceing-sub-heading reveal-rise">
            <p className="p-text-01 text-white-60">
              Choose a plan that fits your trading style. Whether you&apos;re just getting started or managing a full
              portfolio, we’ve got the tools you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
