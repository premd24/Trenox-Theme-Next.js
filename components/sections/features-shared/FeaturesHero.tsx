import ShortTag from "@/components/ui/ShortTag";
import { cx } from "@/lib/utils";

type FeaturesHeroProps = {
  className?: string;
  wrapClassName: string;
  headingClassName?: string;
  /** V1 marks the title up as the page's h1, V3 as an h2. */
  headingTag: "h1" | "h2";
  subHeadingClassName: string;
};

/** "All your investing. In one place." hero shared by Features V1 and V3. */
export default function FeaturesHero({
  className,
  wrapClassName,
  headingClassName,
  headingTag: Heading,
  subHeadingClassName,
}: FeaturesHeroProps) {
  return (
    <section className={cx("hero", className)}>
      <div className="container">
        <div className={cx("hero-01-wrap", wrapClassName)}>
          <ShortTag label="Features" />
          <div className={cx("heading-wrap", headingClassName, "reveal-rise-lg")}>
            <Heading className="h2">All your investing. In one place.</Heading>
          </div>
          <div className={cx("sub-heading-wrap", subHeadingClassName, "reveal-rise")}>
            <p className="p-text-01 text-white-60">
              We cover the whole trade cycle from digital onboarding, real-time price visibility, leverage, best
              execution, to automated settlement and a borderless on/off-ramping experience worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
