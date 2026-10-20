import { OutlineButton, PrimaryButton } from "@/components/ui/Buttons";
import ShortTag from "@/components/ui/ShortTag";
import { img } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="home-hero-v1">
      <div className="container">
        <div className="home-hero-v1-wrap">
          <div className="hero-v1-left">
            <div className="short-teg-wrap">
              <ShortTag label="Introducing our Insights" />
            </div>
            <div className="hero-v1-title-wrap">
              <div className="heading-wrap hero-v1-heading reveal-rise-lg">
                <h1 className="h1 hero-heading">Conquering Your Trading Goals</h1>
              </div>
              <div className="sub-heading-wrap reveal-rise">
                <p className="p-text-01 text-white-60">
                  Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of
                  powerful tools at your fingertips.
                </p>
              </div>
            </div>
            <div className="button-wrap reveal-up-blur">
              <PrimaryButton href="/contact">Get Started</PrimaryButton>
              <OutlineButton href="/contact">Learn More</OutlineButton>
            </div>
          </div>
          <div className="hero-v1-right reveal-up-blur">
            <img
              alt=""
              className="fit-cover"
              fetchPriority="high"
              sizes="(max-width: 880px) 100vw, 880px"
              src={img("Home-1-Image.png")}
              srcSet={`${img("Home-1-Image-p-500.png")} 500w, ${img("Home-1-Image-p-800.png")} 800w, ${img("Home-1-Image.png")} 880w`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
