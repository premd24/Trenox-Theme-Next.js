import { integrations } from "@/data/integrations";
import { IntegrationGrid } from "./IntegrationCard";

/** All integrations (`integrations-v1`). */
export default function IntegrationsListSection() {
  return (
    <section className="integrations-v1">
      <div className="container">
        <div className="integrations-v1-wrap">
          <div className="integrations-v1-left">
            <div className="heading-wrap interation-heading reveal-rise-lg">
              <h2 className="h2">Connect Trenox to your favorite apps!</h2>
            </div>
          </div>
          <div className="integrations-v1-right">
            <IntegrationGrid items={integrations} />
          </div>
        </div>
      </div>
    </section>
  );
}
