import { Fragment } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { services } from "@/data/home";
import { img } from "@/lib/utils";

export default function WhyChooseUsSection() {
  return (
    <section className="service-01" id="why-choose-us">
      <div className="container">
        <div className="service-01-wrap">
          <div className="service-01-top">
            <SectionHeading className="service-01-heading">Why Choose Us?</SectionHeading>
            <SubHeading className="service-01-sub-heading">
              Backed by a suite of powerful tools at your fingertips.
            </SubHeading>
          </div>
          <div className="service-01-bottom">
            {services.map((service, i) => (
              <Fragment key={service.number}>
                {i > 0 && <div className="vertical-divider service-01-divider" />}
                <div className="service-01-list reveal-up-blur">
                  <div className="icon-box-wrap hide-desktop">
                    <img alt="" loading="lazy" src={img(service.icon)} />
                  </div>
                  <div className="service-01-left-list">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
