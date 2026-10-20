import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { processSteps } from "@/data/about-v1";
import { img } from "@/lib/utils";

export default function ProcessSection() {
  return (
    <section className="processed">
      <div className="container">
        <div className="processed-wrap">
          <div className="processed-top">
            <ShortTag label="Our Features" />
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h1">The Process</h2>
            </div>
            <SubHeading>Our financial management platform is transforming the way people manage their money.</SubHeading>
          </div>
          <div className="processed-bottom">
            {processSteps.map((step) => (
              <div className="processed-list reveal-up-blur" key={step.title}>
                <div className="icon-box-wrap">
                  <img alt="" loading="lazy" src={img(step.icon)} />
                </div>
                <div className="processed-text-wrap">
                  <h4 className="h4">{step.title}</h4>
                  <p className="p-text-03 text-white-60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
