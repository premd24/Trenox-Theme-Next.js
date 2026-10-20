import ShortTag from "@/components/ui/ShortTag";
import { useDemoForm } from "@/hooks/useDemoForm";

/** Full-screen "coming soon" hero with an early-access signup. */
export default function ComingSoonSection() {
  const { done, onSubmit } = useDemoForm();

  return (
    <section className="coming-soon">
      <div className="coming-soon-wrap">
        <ShortTag label="Introducing our Insights" />
        <div className="heading-wrap commeing-soon-heading reveal-rise-lg">
          <h1 className="h1 text-linear">Conquering Your Trading Goals</h1>
        </div>
        <div className="sub-heading-wrap reveal-rise">
          <p className="p-text-01 text-white-60">
            Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of powerful
            tools at your fingertips.
          </p>
        </div>
        <div className="form-wrap">
          <div className="wf-form">
            <form
              className="form-3 reveal-rise-slow"
              id="email-form"
              name="email-form"
              onSubmit={onSubmit}
              style={done ? { display: "none" } : undefined}
            >
              <input
                className="text-field-4 wf-input"
                id="email"
                maxLength={256}
                name="email"
                placeholder="Enter Email"
                required
                type="email"
              />
              <input className="form-submit-button v5 wf-button reveal-grow" type="submit" value="Request Early Access" />
            </form>
            <div className="form-success-message wf-form-done" data-form-done="1" hidden={!done}>
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="form-error-message wf-form-fail" data-form-fail="1" hidden>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
