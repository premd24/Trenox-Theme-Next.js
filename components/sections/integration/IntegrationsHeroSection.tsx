import ShortTag from "@/components/ui/ShortTag";

export default function IntegrationsHeroSection() {
  return (
    <section className="hero integrations-hero">
      <div className="container">
        <div className="hero-01-wrap integrations-wrap">
          <ShortTag label="Integrations" />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2">Integrations</h1>
          </div>
          <div className="sub-heading-wrap style-guide-sub-heading reveal-rise">
            <p className="p-text-01 text-white-60">
              Make your customer experience awesome by connecting with the apps you love!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
