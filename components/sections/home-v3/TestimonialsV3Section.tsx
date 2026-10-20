import { clientPortraits, testimonialsV3 } from "@/data/home-v3";
import { img } from "@/lib/utils";

/** Quote rail that slides sideways while each client portrait lights up in turn (`data-scrub="rail"`). */
export default function TestimonialsV3Section() {
  return (
    <section className="testimonials-v3">
      <div className="testimonials-v3-wrap" data-scrub="rail">
        <div className="testimonials-v3-main-wrap">
          <div className="testimonials-v3-top">
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">Trusted by 6k+people to move business forward</h2>
            </div>
          </div>
          <div className="testimonials-v3-bottom">
            <div className="client-image-wrap">
              {clientPortraits.map((portrait, i) => (
                <div className={`client-image _0${i + 1} reveal-left`} key={i}>
                  <img alt="" className="fit-cover" loading="lazy" src={img(portrait)} />
                </div>
              ))}
            </div>
            <div className="testimonials-v3-details-wrap">
              <div className="box-absolute-shadow left" />
              <div className="box-absolute-shadow right" />
              <div className="testimonials-details-wrap">
                <div className="testimonials-details-main reveal-up-blur">
                  {testimonialsV3.map((testimonial, i) => (
                    <div className="testimonials-list-v3" key={i}>
                      <div className="testimonials-list">
                        <p className="p-text-02">{testimonial.quote}</p>
                        <div className="client-info-v3">
                          <h5 className="h5">{testimonial.name}</h5>
                          <img alt="" className="star-image" loading="lazy" src={img("Star.svg")} />
                        </div>
                      </div>
                      <div className="testimonials-v3-shadow" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-diamond-wrap">
            <img alt="" className="fit-cover" loading="lazy" src={img("Testimonials.avif")} />
          </div>
        </div>
      </div>
    </section>
  );
}
