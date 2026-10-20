import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import { languages } from "@/data/home";
import { img } from "@/lib/utils";

export default function LanguagesSection() {
  return (
    <section className="languages">
      <div className="container">
        <div className="languages-wrap">
          <div className="languages-top">
            <ShortTag label="Languages" />
            <SectionHeading className="languages-heading">Customer Support in 18 Languages</SectionHeading>
          </div>
          <div className="languages-bottom">
            {languages.map((language) => (
              <div className="languages-plag-list-wrap reveal-rise-lg" key={language.name}>
                <div className="languages-plag-list">
                  <img alt="" className="plag-image" loading="lazy" src={img(language.flag)} />
                  <h5 className="h5">{language.name}</h5>
                </div>
                <div className="languages-plag-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
