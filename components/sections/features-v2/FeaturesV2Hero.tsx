import Navbar from "@/components/layout/Navbar";
import { OutlineButton, PrimaryButton } from "@/components/ui/Buttons";
import ShortTag from "@/components/ui/ShortTag";
import { img } from "@/lib/utils";

/** The page's hero section; it also wraps the navbar. */
export default function FeaturesV2Hero() {
  return (
    <section className="features-v2">
      <Navbar />
      <div className="container">
        <div className="features-v2-wrap">
          <div className="features-v2-left">
            <div className="hero-heading-wrap">
              <ShortTag label="Introducing our Insights" />
              <div className="heading-wrap features-heading-v2 reveal-rise-lg">
                <h1 className="h1">Youflow vs DeepTrade: Which trading site is cooler for you?</h1>
              </div>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01 text-white-60">
                Customize your business journey effortlessly with Trenox&apos;s dashboard, backed by a suite of
                powerful tools at your fingertips.
              </p>
            </div>
            <div className="hero-button-wrap reveal-up-blur">
              <PrimaryButton href="/contact">Get Started</PrimaryButton>
              <OutlineButton href="/contact">How it works</OutlineButton>
            </div>
          </div>
          <div className="features-v2-right-wrapper">
            <div className="features-v2-right reveal-up">
              <img alt="" className="fit-cover features-image" loading="lazy" src={img("monitoring.avif")} />
              <div className="features-v2-image-border reveal-unblur" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear v3" />
    </section>
  );
}
