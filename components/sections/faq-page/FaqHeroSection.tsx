import { faqPageHero } from "@/data/faq-page";

export default function FaqHeroSection() {
  return (
    <section className="hero faq-hero">
      <div className="container">
        <div className="hero-01-wrap faq-hero-wrap">
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2">{faqPageHero.title}</h1>
          </div>
          <div className="sub-heading-wrap style-guide-sub-heading reveal-rise">
            <p className="p-text-01 text-white-60">{faqPageHero.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
