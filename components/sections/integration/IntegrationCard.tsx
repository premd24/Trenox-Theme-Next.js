import SiteLink from "@/components/ui/SiteLink";
import type { Integration } from "@/data/integrations";
import { img } from "@/lib/utils";

/** Logo tile linking to an integration page; a gradient bubble rises on hover. */
export default function IntegrationCard({ slug, name, logo }: Integration) {
  return (
    <div role="listitem">
      <SiteLink className="integrations-list inline-block reveal-up-blur" href={`/integration/${slug}`}>
        <div className="integrations-main-list">
          <div className="integrations-icon reveal-grow">
            <img alt={`${name} logo`} className="fit-cover" loading="lazy" src={img(logo)} />
          </div>
          <h4 className="h4 _001">{name}</h4>
          <div className="integrations-bg">
            <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("intregationcard-1.avif")} />
          </div>
        </div>
        <div className="integrations-hover-buble">
          <img alt="" className="fit-cover" loading="lazy" src={img("intregationcard.avif")} />
        </div>
        <div className="integrations-normal-shadow" />
        <div className="integrations-hover-shadow bg-primary-gradient" />
      </SiteLink>
    </div>
  );
}

/** The grid of integration tiles. */
export function IntegrationGrid({ items }: { items: Integration[] }) {
  return (
    <div>
      <div className="collection-list-3" role="list">
        {items.map((item) => (
          <IntegrationCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
