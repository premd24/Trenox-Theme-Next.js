import { useSlider } from "@/hooks/useSlider";
import { authTestimonials } from "@/data/auth";
import { cx, img } from "@/lib/utils";

type AuthTestimonialSliderProps = { className?: string };

/** Right-hand testimonial carousel: autoplays, with arrows and dots. */
export default function AuthTestimonialSlider({ className }: AuthTestimonialSliderProps) {
  const { index, trackRef, prev, next, goTo, rootProps } = useSlider({
    count: authTestimonials.length,
    autoplay: 4000,
    duration: 500,
  });

  return (
    <div className={cx("team-slider-wrapper", className)} {...rootProps}>
      <div className="mask">
        <div className="slider-track" ref={trackRef}>
          {authTestimonials.map((testimonial, i) => (
            <div aria-hidden={i !== index} className="team-slide-wrapper" data-slide="1" key={testimonial.name}>
              <div className="testimonials-v4">
                <div className="client-image-04">
                  <img alt="" className="fit-cover border-radius-100" loading="lazy" src={img(testimonial.image)} />
                </div>
                <h4 className="h4">{testimonial.quote}</h4>
                <div className="client-info-wrap">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="tagline text-white-60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button aria-label="Previous" className="team-slider-arrow" onClick={prev} type="button">
        <svg aria-hidden="true" className="slider-arrow-icon" fill="none" focusable="false" viewBox="0 0 24 24">
          <path d="M15 5 8 12l7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </button>
      <button aria-label="Next" className="team-slider-arrow" onClick={next} type="button">
        <svg aria-hidden="true" className="slider-arrow-icon" fill="none" focusable="false" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </button>
      <div className="team-slider-nav">
        {authTestimonials.map((testimonial, i) => (
          <button
            aria-current={i === index}
            aria-label={`Slide ${i + 1}`}
            key={testimonial.name}
            onClick={() => goTo(i)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
