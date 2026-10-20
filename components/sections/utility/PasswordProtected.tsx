import { useEffect, useRef } from "react";
import { useDemoForm } from "@/hooks/useDemoForm";

/** The 401 password prompt (a front-end demo: submitting just clears it). */
export default function PasswordProtected() {
  const { onSubmit } = useDemoForm();
  const passRef = useRef<HTMLInputElement>(null);

  // React skips `autoFocus` when hydrating server markup, so focus on mount.
  useEffect(() => passRef.current?.focus(), []);

  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content wf-form">
        <form className="utility-page-form reveal-rise-lg" id="email-form" name="email-form" onSubmit={onSubmit}>
          <h1 className="h3">Password protected</h1>
          <label className="field-label" htmlFor="pass">
            Password
          </label>
          <div className="login-form-wrap">
            <input
              autoFocus
              className="text-field-3 wf-input"
              id="pass"
              maxLength={256}
              name="pass"
              placeholder="Enter you password"
              ref={passRef}
              type="password"
            />
            <input className="form-submit-button login-form-button wf-button reveal-grow" type="submit" value="Submit" />
          </div>
          <div className="is-hidden">
            <input name="path" type="hidden" value="<%WF_FORM_VALUE_PATH%>" />
            <input name="page" type="hidden" value="<%WF_FORM_VALUE_PAGE%>" />
          </div>
          <div className="is-hidden" />
        </form>
      </div>
    </div>
  );
}
