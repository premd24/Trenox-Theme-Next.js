import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { whyYouflow, youflowReasons } from "@/data/career";
import { img } from "@/lib/utils";

/** "Why Work at Youflow?" with three icon cards. */
export default function YouflowSection() {
  return (
    <section className="youflow">
      <div className="container">
        <div className="youflow-wrap">
          <div className="youflow-top">
            <SectionHeading>{whyYouflow.title}</SectionHeading>
            <SubHeading>{whyYouflow.text}</SubHeading>
          </div>
          <div className="youflow-bottom">
            {youflowReasons.map((reason) => (
              <div className="youflow-list reveal-up-blur" id={reason.id} key={reason.title}>
                <div className="icon-box-wrap">
                  <img alt="" loading="lazy" src={img(reason.icon)} />
                </div>
                <div className="youflow-text-wrap">
                  <h4 className="h4">{reason.title}</h4>
                  <p className="p-text-03 text-white-60">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
