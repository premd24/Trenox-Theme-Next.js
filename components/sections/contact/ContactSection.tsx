import { contactFields, contactIntro, projectTypes } from "@/data/contact";
import { useDemoForm } from "@/hooks/useDemoForm";

/** Heading plus the contact form, which swaps for a thank-you note on submit. */
export default function ContactSection() {
  const { done, onSubmit } = useDemoForm();

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-top">
            <div className="heading-wrap reveal-rise-lg">
              <h1 className="h2">{contactIntro.title}</h1>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01 text-white-60">{contactIntro.text}</p>
            </div>
          </div>
          <div className="contact-bottom">
            <div className="contact-form wf-form">
              <form
                className="contact-form-wrap"
                id="email-form-2"
                name="email-form-2"
                onSubmit={onSubmit}
                style={done ? { display: "none" } : undefined}
              >
                {contactFields.map((field) => (
                  <div className="contact-form-list reveal-rise-slow" key={field.id}>
                    <label className="p-text-03" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      className="text-field-v5 wf-input"
                      id={field.id}
                      maxLength={256}
                      name={field.id}
                      placeholder={field.placeholder}
                      required
                      type={field.type}
                    />
                  </div>
                ))}
                <div className="contact-form-list reveal-rise-slow">
                  <label className="p-text-03" htmlFor="field">
                    Project Type
                  </label>
                  <select className="text-field-v5 _02 wf-select" id="field" name="field">
                    {projectTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="contact-form-list reveal-rise-slow">
                  <label className="p-text-03" htmlFor="Message">
                    Message (Optional)
                  </label>
                  <textarea
                    className="text-field-v5 _01 wf-input"
                    id="Message"
                    maxLength={5000}
                    name="Message"
                    placeholder="Type here"
                    required
                  />
                </div>
                <input className="form-submit-button v6 wf-button reveal-grow" type="submit" value="Submit" />
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
      </div>
    </section>
  );
}
