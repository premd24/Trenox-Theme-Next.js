import { useDemoForm } from "@/hooks/useDemoForm";
import { img } from "@/lib/utils";

/** Compact footer with a mailing-list signup (About V2, Features V3). */
export default function FooterV3() {
  const { done, onSubmit } = useDemoForm();

  return (
    <section className="footer-v3">
      <div className="container">
        <div className="footer-v3-wrap">
          <div className="footer-v3-top">
            <div className="footer-v3-top-left reveal-up-blur">
              <div className="footer-logo-details">
                <div className="footer-logo-wrap">
                  <a className="footer-logo inline-block" href="#">
                    <img alt="" className="fit-cover" loading="lazy" src={img("Footer-Logo.svg")} />
                  </a>
                  <div className="p-text-01">Conquering &nbsp;Your &nbsp;Trading Goals</div>
                </div>
                <p className="p-text-03 text-white-70">
                  Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of
                  powerful tools at your fingertips.
                </p>
              </div>
              <a className="text-link" href="mailto:support@example.com">
                support@example.com
              </a>
            </div>
            <div className="footer-v3-top-right reveal-up-blur">
              <h4 className="h4">Join Mailing List</h4>
              <div className="form-block-3 wf-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  onSubmit={onSubmit}
                  style={done ? { display: "none" } : undefined}
                >
                  <input
                    className="text-field-6 wf-input"
                    id="Email"
                    maxLength={256}
                    name="Email"
                    placeholder="Please enter your email address"
                    required
                    type="email"
                  />
                  <input className="form-submit-button v7 wf-button reveal-grow" type="submit" value="Subscribe" />
                </form>
                <div className="form-success-message wf-form-done" data-form-done="1" hidden={!done}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="wf-form-fail" data-form-fail="1" hidden>
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-lineer" />
          <div className="footer-bottom-wrap v1 reveal-up-blur">
            <div className="p-text-03 text-white-60">© 2025 Trading. All rights reserved.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
