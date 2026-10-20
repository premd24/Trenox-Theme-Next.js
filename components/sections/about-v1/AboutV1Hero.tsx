import ShortTag from "@/components/ui/ShortTag";

export default function AboutV1Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-01-wrap about-hero">
          <ShortTag label="About Us" />
          <div className="heading-wrap about-v1-heading reveal-rise-lg">
            <h1 className="h2">We’re creating technology that makes building a multi-asset portfolio fast.</h1>
          </div>
          <div className="sub-heading-wrap about-sub-heading-v1 reveal-rise">
            <p className="p-text-01 text-white-60">
              Customize your business journey effortlessly with Trenox&apos;s dashboard, backed by a suite of powerful
              tools at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
