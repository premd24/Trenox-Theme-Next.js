import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { platformItems } from "@/data/features-v1";
import { img } from "@/lib/utils";

export default function PlatformSection() {
  return (
    <section className="platform-v1">
      <div className="container">
        <div className="platform-v1-wrap">
          <div className="platform-v1-top">
            <SectionHeading>Ways to Trade with Our Platform</SectionHeading>
            <SubHeading>Over $3 billion has been processed through our on and off ramp services.</SubHeading>
          </div>
          <div className="platform-v1-bottom">
            {platformItems.map((item) => (
              <div className="platform-v1-list reveal-up-blur" id={item.id} key={item.title}>
                <div className="platform-v1-main">
                  <div className="icon-box-wrap">
                    <img alt="" loading="lazy" src={img(item.icon)} />
                  </div>
                  <div className="platform-v1-text-wrap">
                    <h5 className="h5">{item.title}</h5>
                    <div className="p-text-03 text-white-60">{item.text}</div>
                  </div>
                </div>
                <div className="platform-v1-bg reveal-unblur">
                  <img alt="" className="fit-cover border-radius-16" loading="lazy" src={img("Platform.avif")} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
