import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import type { Testimonial } from "@/data/home";
import { integrationTestimonialRows } from "@/data/integrations";
import { cx, img } from "@/lib/utils";

/**
 * The `testimonials-01 v2` variant: like the home section, but each marquee row
 * reveals on its own and the quotes say "Youflow".
 */
export default function IntegrationTestimonialsSection() {
  return (
    <section className="testimonials-01 v2">
      <div className="container">
        <div className="testimonials-01-wrap">
          <div className="testimonials-01-top">
            <div className="testimonials-01-top-left">
              <ShortTag label="Testimonials" />
              <SectionHeading className="testimonials-01-heading">What Clients think about our Services</SectionHeading>
            </div>
            <SubHeading className="testimonials-01-sub-heading">
              Our financial management platform is transforming the way people manage their money. Here’s what some
              of our users have to say about their experience
            </SubHeading>
          </div>
        </div>
      </div>
      <div className="container-long">
        <div className="testimonials-01-bottom-wrap">
          {integrationTestimonialRows.map((row, i) => (
            <div className={cx("testimonials-01-wrapper", row.className, "reveal-up-blur")} key={i}>
              {row.loops.map((loop, j) => (
                <div className="testimonials-01-outer" key={j}>
                  {loop.map((testimonial, k) => (
                    <TestimonialCard key={k} {...testimonial} />
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="move-animation-shadow-right" />
          <div className="move-animation-shadow-left" />
        </div>
      </div>
      <div className="testimonials-01-bg-linear" />
    </section>
  );
}

function TestimonialCard({ name, image, quote, date }: Testimonial) {
  return (
    <div className="testimonials-01-box">
      <div className="testimonials-01-box-wrap">
        <div className="testimonials-01-info">
          <img alt="" className="testimonials-01-client" loading="lazy" src={img(image)} />
          <div className="client-name-wrap">
            <div>{name}</div>
            <img alt="" className="star-image" loading="lazy" src={img("Star-Image.svg")} />
          </div>
        </div>
        <div className="testimonials-01-text">
          <p className="p-text-02 text-white-70">{quote}</p>
        </div>
        <div className="testimonials-01-date">{date}</div>
      </div>
      <div className="testimonials-01-border" />
    </div>
  );
}
