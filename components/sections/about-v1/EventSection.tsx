import ShortTag from "@/components/ui/ShortTag";
import SiteLink from "@/components/ui/SiteLink";
import { img } from "@/lib/utils";

export default function EventSection() {
  return (
    <section className="event">
      <div className="container">
        <div className="event-wrapper">
          <div className="event-wrap">
            <div className="event-main-wrap">
              <div className="event-left">
                <ShortTag label="Events" />
                <div className="event-text-wrap">
                  <div className="heading-wrap event-heading reveal-rise-lg">
                    <h2 className="h2">Recent Events</h2>
                  </div>
                  <div className="sub-heading-wrap reveal-rise">
                    <p className="p-text-01 text-white-70">
                      Our financial management platform is transforming the way people manage their money. Here’s what
                      some of our users have to say about their experience
                    </p>
                  </div>
                </div>
                <div className="event-button-wrap reveal-up-blur">
                  {/* The home PrimaryButton, with the features-02 sizing class. */}
                  <SiteLink className="button-01 features-02-button inline-block" href="/contact">
                    <div className="button-text-icon-wrap">
                      <div className="button-text-wrapper">
                        <div className="button-text-01 text-black">Explore Now</div>
                        <div className="button-text-01 text-white">Explore Now</div>
                      </div>
                      <div className="button-icon-wrap">
                        <img alt="" className="button-icon _01" loading="lazy" src={img("Vector-Top.svg")} />
                        <img alt="" className="button-icon _02" loading="lazy" src={img("Vector-Top-White.svg")} />
                      </div>
                    </div>
                    <div className="hover-color bg-primary-gradient" />
                  </SiteLink>
                </div>
              </div>
              <div className="event-right reveal-grow">
                <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("Event.avif")} />
              </div>
              <div className="event-wrap-bg reveal-unblur" />
            </div>
          </div>
          <div className="event-wrap-shadow" />
        </div>
      </div>
    </section>
  );
}
