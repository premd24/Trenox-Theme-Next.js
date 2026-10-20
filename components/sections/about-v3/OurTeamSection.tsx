import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { teamMembers } from "@/data/about-v3";
import { img } from "@/lib/utils";

export default function OurTeamSection() {
  return (
    <section className="our-team-v3">
      <div className="container">
        <div className="our-team-v3-wrap">
          <div className="our-team-v3-top">
            <ShortTag label="Our Team" />
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">Meet the team</h2>
            </div>
            <SubHeading>
              The minds behind the mission a diverse team of builders, analysts, and innovators dedicated to redefining
              how the world trades.
            </SubHeading>
          </div>
          <div className="our-team-v3-bottom">
            {teamMembers.map((member) => (
              <div className="team-v3-mamber-list reveal-up-blur" key={member.name}>
                <div className="team-mamber-image">
                  <img alt="" className="fit-cover border-radius-13" loading="lazy" src={img(member.image)} />
                </div>
                <div className="team-mamber-info">
                  <div className="p-text-02">{member.name}</div>
                  <div className="p-text-03 text-white-60">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
