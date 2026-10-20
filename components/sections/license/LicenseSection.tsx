import SiteLink from "@/components/ui/SiteLink";
import { licenseGroups } from "@/data/license";
import { cx, img } from "@/lib/utils";

/** Image, icon and font credits, one card per group. */
export default function LicenseSection() {
  return (
    <section className="license">
      <div className="container">
        <div className="license-wrap">
          {licenseGroups.map((group) => (
            <div className="license-box-wrap reveal-rise-slow" key={group.title}>
              <div className="license-box-main-wrap">
                <h4 className="h4 text-linear">{group.title}</h4>
                <div className={cx("license-box-item-wrap", group.itemsClass)}>
                  {group.links.map((link) => (
                    <SiteLink className="license-box-item inline-block" external href={link.href} id={link.id} key={link.href}>
                      <img alt="" loading="lazy" src={img(link.icon)} />
                      <div className="p-text-03">{link.label}</div>
                    </SiteLink>
                  ))}
                </div>
              </div>
              <div className="license-box-shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
