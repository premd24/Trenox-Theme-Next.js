import ShortTag from "@/components/ui/ShortTag";

export default function AboutV2Hero() {
  return (
    <section className="hero about-v2-hero">
      <div className="container">
        <div className="hero-01-wrap about-v2-wrap">
          <ShortTag label="About Us" />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2 about-heading">
              We&apos;re making tech that helps you whip up a multi-asset portfolio in no time.
            </h1>
          </div>
          <div className="sub-heading-wrap about-v2-subheading reveal-rise">
            <p className="p-text-01 text-white-60">
              Easily customize your business journey with Trenox&apos;s dashboard, packed with awesome tools right at
              your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
