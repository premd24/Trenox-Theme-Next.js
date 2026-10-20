import { useDemoForm } from "@/hooks/useDemoForm";

/** Footer signup: swaps itself for a thank-you note on submit. */
export default function NewsletterForm() {
  const { done, onSubmit } = useDemoForm();

  return (
    <div className="newsletter-form-wrap">
      <h4 className="h4">Subscribe to our newsletter</h4>
      <div className="form-block wf-form">
        <form
          className="newsletter-form"
          id="email-form"
          name="email-form"
          onSubmit={onSubmit}
          style={done ? { display: "none" } : undefined}
        >
          <input
            className="text-field wf-input"
            id="email"
            maxLength={256}
            name="email"
            placeholder="Enter email address"
            required
            type="email"
          />
          <input className="submit-button wf-button" type="submit" value="" aria-label="Subscribe" />
        </form>
        <div className="success-message-box wf-form-done" data-form-done="1" hidden={!done}>
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="wf-form-fail" data-form-fail="1" hidden>
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  );
}
