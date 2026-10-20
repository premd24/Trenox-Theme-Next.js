import { useDemoForm } from "@/hooks/useDemoForm";
import { img } from "@/lib/utils";

export default function HeroV2Section() {
  const { done, onSubmit } = useDemoForm();

  return (
    <section className="home-hero-v2">
      <div className="container">
        <div className="home-hero-v2-wrap">
          <div className="home-hero-v2-top">
            <div className="heading-wrap reveal-rise-lg">
              <h1 className="h1">Crush Your Trading Goals</h1>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01 text-white-60">
                Effortlessly tailor your business journey with Trenox’s intuitive dashboard—powered by a robust suite
                of tools, all at your fingertips.
              </p>
            </div>
            <div className="hero-form-wrap reveal-up-blur">
              <div className="form-block-2 wf-form">
                <form
                  className="form"
                  id="email-form"
                  name="email-form"
                  onSubmit={onSubmit}
                  style={done ? { display: "none" } : undefined}
                >
                  <input
                    className="home-v2-text-field wf-input"
                    id="email"
                    maxLength={256}
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                  <input className="form-submit-button hero-button wf-button reveal-grow" type="submit" value="Subscribe" />
                </form>
                <div className="form-success-message wf-form-done" data-form-done="1" hidden={!done}>
                  <div className="p-text-02 text-white-70">Thank you! Your submission has been received!</div>
                </div>
                <div className="form-error-message wf-form-fail" data-form-fail="1" hidden>
                  <div className="p-text-02 error-state">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-hero-v2-bottom reveal-up">
            <img
              alt=""
              className="fit-cover border-radius-13"
              loading="lazy"
              sizes="(max-width: 1092px) 100vw, 1092px"
              src={img("Monitoring.png")}
              srcSet={`${img("Monitoring-p-500.png")} 500w, ${img("Monitoring-p-800.png")} 800w, ${img("Monitoring-p-1080.png")} 1080w, ${img("Monitoring.png")} 1092w`}
            />
          </div>
        </div>
      </div>
      <div className="bg-linear" />
    </section>
  );
}
