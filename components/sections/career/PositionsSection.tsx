import ShortTag from "@/components/ui/ShortTag";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteLink from "@/components/ui/SiteLink";
import { positions } from "@/data/career";

/** Open roles, each with an "Apply now" pill. */
export default function PositionsSection() {
  return (
    <section className="positions">
      <div className="container">
        <div className="positions-wrap">
          <div className="positions-top">
            <SectionHeading>Open positions</SectionHeading>
            <div className="sub-heading-wrap reveal-rise">
              <div className="p-text-02 text-white-70">{String(positions.length).padStart(2, "0")} openings</div>
            </div>
          </div>
          <div className="positions-bottom">
            {positions.map((position) => (
              <div className="positions-list reveal-rise-slow" key={position.title}>
                <div className="positions-name">
                  <h4 className="h4">{position.title}</h4>
                </div>
                <div className="positions-type">
                  <div className="p-text-02 text-linear-primary">{position.type}</div>
                </div>
                <SiteLink className="apply-link inline-block" href="/contact">
                  <ShortTag label="Apply now" />
                </SiteLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
