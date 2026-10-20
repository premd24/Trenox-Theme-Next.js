import { PrimaryButton } from "@/components/ui/Buttons";
import { integrationLanguages } from "@/data/home-v2";
import { img } from "@/lib/utils";

export default function IntegrationSection() {
  return (
    <section className="integration">
      <div className="container">
        <div className="integration-wrap">
          <div className="integration-left">
            {integrationLanguages.map((language) => (
              <div className="languages-plag-list-wrap reveal-rise-lg" key={language.name}>
                <div className="languages-plag-list">
                  <img alt="" className="plag-image" loading="lazy" src={img(language.flag)} />
                  <h5 className="h5">{language.name}</h5>
                </div>
                <div className="languages-plag-border" />
              </div>
            ))}
          </div>
          <div className="integration-right">
            <div className="heading-wrap integration-heading reveal-rise-lg">
              <h2 className="h1">Streamline Everything with One Integration.</h2>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-01">
                Effortlessly tailor your business journey with Trenox intuitive dashboard—powered by a robust suite of
                tools, all at your fingertips.
              </p>
            </div>
            <div className="integration-button-wrap reveal-up-blur">
              <PrimaryButton className="features-02-button" href="/contact">
                Explore Now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
