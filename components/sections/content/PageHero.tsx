import ShortTag from "@/components/ui/ShortTag";
import { cx } from "@/lib/utils";

type PageHeroProps = {
  tag: string;
  title: string;
  text: string;
  /** Extra classes for the section, the inner wrap and the lead paragraph's wrap. */
  sectionClass?: string;
  wrapClass?: string;
  subHeadingClass?: string;
};

/** The centred page-title hero shared by the blog, career, changelog and license pages. */
export default function PageHero({
  tag,
  title,
  text,
  sectionClass,
  wrapClass,
  subHeadingClass = "style-guide-sub-heading",
}: PageHeroProps) {
  return (
    <section className={cx("hero", sectionClass)}>
      <div className="container">
        <div className={cx("hero-01-wrap", wrapClass)}>
          <ShortTag label={tag} />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2">{title}</h1>
          </div>
          <div className={cx("sub-heading-wrap", subHeadingClass, "reveal-rise")}>
            <p className="p-text-01 text-white-60">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
