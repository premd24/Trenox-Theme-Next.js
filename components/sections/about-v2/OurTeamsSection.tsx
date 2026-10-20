import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import SiteLink from "@/components/ui/SiteLink";
import { crew, crewSocials } from "@/data/about-v2";
import { cx, img } from "@/lib/utils";

export default function OurTeamsSection() {
  return (
    <section className="our-teams">
      <div className="container">
        <div className="our-teams-wrap">
          <div className="our-teams-left">
            <ShortTag label="Our Teams" />
            <SectionHeading className="our-team-heading">Say Hi to the Crew!</SectionHeading>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-03 text-white-70">
                Our money management platform is changing the game for how folks handle their cash.
              </p>
            </div>
          </div>
          <div className="our-teams-right">
            {crew.map((member, i) => (
              <div className={cx("teams-list", i === crew.length - 1 && "last", "reveal-up-blur")} key={member.name}>
                <div className="teams-list-item">
                  <div className="p-text-02">{member.name}</div>
                </div>
                <div className="teams-list-item">
                  <div className="p-text-03 text-white-60">{member.role}</div>
                </div>
                <div className="teams-list-item social-right">
                  {crewSocials.map((social) => (
                    <SiteLink className="inline-block" external href={social.href} key={social.href}>
                      <div className="teams-social">
                        {social.icons.map((icon) => (
                          <img alt="" className="fit-cover" key={icon} loading="lazy" src={img(icon)} />
                        ))}
                      </div>
                    </SiteLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
