import ShortTag from "@/components/ui/ShortTag";

export default function StyleGuideHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-01-wrap">
          <ShortTag label="Introducing our Insights" />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h1">Styleguide</h1>
          </div>
          <div className="sub-heading-wrap style-guide-sub-heading reveal-rise">
            <p className="p-text-01">
              Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of powerful
              tools at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
