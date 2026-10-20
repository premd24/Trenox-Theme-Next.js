import AuthTestimonialSlider from "@/components/sections/auth/AuthTestimonialSlider";
import LanguageSelect from "@/components/sections/auth/LanguageSelect";
import SiteLink from "@/components/ui/SiteLink";
import { useDemoForm } from "@/hooks/useDemoForm";
import { authPages, type AuthVariant } from "@/data/auth";
import { img } from "@/lib/utils";

type AuthSectionProps = { variant: AuthVariant };

/** The login / register split screen: the form on the left, testimonials on the right. */
export default function AuthSection({ variant }: AuthSectionProps) {
  const page = authPages[variant];

  return (
    <section className="register">
      <div className="full-container">
        <div className="left-block">
          <div className="left-block-main reveal-grow">
            <div className="left-top-block">
              <SiteLink className="left-top-left inline-block" href="/">
                <img alt="" className="fit-cover" loading="lazy" src={img("Logo.svg")} />
              </SiteLink>
              <div className="left-top-right">
                <div className="tagline text-white-60">Already have an account?</div>
                <SiteLink
                  className="form-submit-button v3 inline-block reveal-grow"
                  href={page.switchLink.href}
                  target={page.switchLink.newTab ? "_blank" : undefined}
                >
                  <div className="tagline">{page.switchLink.label}</div>
                </SiteLink>
              </div>
            </div>
            <div className="left-middel-block">
              <div className="left-middel-top-wrap">
                <div className="details-heading-wrap">
                  <div className="logo-box register-logo">
                    <img alt="" className="fit-cover" loading="lazy" src={img("Custom-Icon.svg")} />
                  </div>
                  <h1 className="h4">{page.heading}</h1>
                  <div className="tagline text-white-60">{page.intro}</div>
                </div>
                <div className="social-signin-box">
                  {page.socialLinks.map((link) => (
                    <SiteLink className="sign-in-list inline-block" external href={link.href} key={link.logo}>
                      <img alt="" loading="lazy" src={img(link.logo)} />
                    </SiteLink>
                  ))}
                </div>
                <div className="or-block">
                  <div className="vertical-lineer v1" />
                  <div className="tagline text-white-60">OR</div>
                  <div className="vertical-lineer v1" />
                </div>
              </div>
              <div className="left-middle-bottom">
                <AuthForm variant={variant} />
              </div>
            </div>
            <div className="left-bottom-block">
              <div className="tagline text-white-60">© 2024 Youflow&apos;s</div>
              <LanguageSelect />
            </div>
          </div>
        </div>
        <div className="right-block">
          <AuthTestimonialSlider className={variant === "register" ? "reveal-grow" : undefined} />
        </div>
      </div>
    </section>
  );
}

type FieldLabelProps = { htmlFor: string; children: string };

function FieldLabel({ htmlFor, children }: FieldLabelProps) {
  return (
    <label className="form-labels tagline" htmlFor={htmlFor}>
      {children} <span className="text-red">*</span>
    </label>
  );
}

/** Demo sign-in / sign-up form; register adds a name field and a password hint. */
function AuthForm({ variant }: AuthSectionProps) {
  const { done, onSubmit } = useDemoForm();
  const isRegister = variant === "register";

  return (
    <div className="wf-form">
      <form
        className="form-2"
        id="email-form"
        name="email-form"
        onSubmit={onSubmit}
        style={done ? { display: "none" } : undefined}
      >
        {isRegister && (
          <div className="form-labels-wrap">
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <input
              className="text-filed-v3 _01 wf-input"
              id="name"
              maxLength={256}
              name="name"
              placeholder="Jack Mahir"
              required
              type="text"
            />
          </div>
        )}
        <div className="form-labels-wrap">
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <input
            className="text-filed-v3 wf-input"
            id="email"
            maxLength={256}
            name="email"
            placeholder="support@example.com"
            required
            type="email"
          />
        </div>
        <div className="form-labels-wrap">
          <FieldLabel htmlFor="Password">Password</FieldLabel>
          <input
            className="text-filed-v3 _03 wf-input"
            id="Password"
            maxLength={256}
            name="Password"
            placeholder="............."
            required
            type="password"
          />
          {isRegister ? (
            <div className="additional-info">
              <img alt="" loading="lazy" src={img("information-fill.svg")} />
              <div className="tagline text-white-60 _001">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </div>
            </div>
          ) : (
            <div className="additional-info _01">
              <label className="wf-checkbox checkbox-field">
                <input className="wf-checkbox-input checkbox" id="checkbox" name="checkbox" type="checkbox" />
                <span className="tagline text-white-60 wf-form-label">Keep me logged in</span>
              </label>
              <SiteLink className="tagline text-white-60 _001" href="/register">
                Forgot password?
              </SiteLink>
            </div>
          )}
        </div>
        <div className="form-button-wrap">
          <input
            className="form-submit-button v4 wf-button reveal-grow"
            type="submit"
            value={authPages[variant].submitLabel}
          />
        </div>
      </form>
      <div className="form-success-message wf-form-done" data-form-done="1" hidden={!done}>
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="form-error-message wf-form-fail" data-form-fail="1" hidden>
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
}
