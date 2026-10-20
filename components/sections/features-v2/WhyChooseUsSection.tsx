import { Fragment } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { services } from "@/data/features-v2";
import { img } from "@/lib/utils";

/** The home page's "Why Choose Us?" (service-01) with this page's copy. */
export default function WhyChooseUsSection() {
  return (
    <section className="service-01">
      <div className="container">
        <div className="service-01-wrap">
          <div className="service-01-top">
            <SectionHeading className="service-01-heading">Why Choose Us?</SectionHeading>
            <SubHeading className="service-01-sub-heading">
              Backed by a suite of powerful tools at your fingertips.
            </SubHeading>
          </div>
          <div className="service-01-bottom">
            {services.map((service, i) => {
              const mobileIcon = (
                <div className="icon-box-wrap hide-desktop">
                  <img alt="" loading="lazy" src={img(service.icon)} />
                </div>
              );
              return (
                <Fragment key={service.number}>
                  {i > 0 && <div className="vertical-divider service-01-divider" />}
                  <div className="service-01-list reveal-up-blur">
                    {!service.mobileIconInLeft && mobileIcon}
                    <div className="service-01-left-list">
                      {service.mobileIconInLeft && mobileIcon}
                      <div className="p-text-03">{service.number}</div>
                      <h4 className="h4">{service.title}</h4>
                    </div>
                    <div className="service-01-right-list">
                      <div className="icon-box-wrap hide-mobile">
                        <img alt="" loading="lazy" src={img(service.icon)} />
                      </div>
                      <p className="p-text-02 text-white-70">{service.text}</p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
