import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { founders, type Founder } from "@/data/about-v1";
import { img } from "@/lib/utils";

export default function FoundersSection() {
  return (
    <section className="teams-v1">
      <div className="container">
        <div className="teams-v1-wrap">
          <div className="teams-v1-top">
            <ShortTag label="Our Teams" />
            <SectionHeading>Meet The Founders</SectionHeading>
            <SubHeading>Our financial management platform is transforming the way people manage their money.</SubHeading>
          </div>
          <div className="teams-v1-bottom">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard({ name, role, image, bio }: Founder) {
  const srcSet = [
    `${img(`${image}-p-500.webp`)} 500w`,
    `${img(`${image}-p-800.webp`)} 800w`,
    `${img(`${image}-p-1080.webp`)} 1080w`,
    `${img(`${image}.webp`)} 1216w`,
  ].join(", ");

  return (
    <div className="teams-v1-card-list reveal-up-blur">
      <div className="teams-v1-card-image">
        <div className="teams-v1-card-image-wrap">
          <div className="teams-v1-image">
            <img
              alt=""
              className="fit-cover"
              loading="lazy"
              sizes="100vw"
              src={img(`${image}.webp`)}
              srcSet={srcSet}
            />
          </div>
          <div className="team-v1-info-box">
            <h4 className="h4">{name}</h4>
            <div className="p-text-01 text-white-60">{role}</div>
          </div>
          <div className="teams-v1-card-bg reveal-unblur">
            <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("features-5.avif")} />
          </div>
        </div>
        <div className="teams-v1-card-shadow" />
      </div>
      <div className="teams-v1-details">
        <p className="p-text-02 text-white-70">{bio}</p>
      </div>
    </div>
  );
}
