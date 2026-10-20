import { Fragment } from "react";
import SiteLink from "@/components/ui/SiteLink";
import { useDropdown } from "@/hooks/useDropdown";
import { pagesDropdown } from "@/data/navigation";
import { cx } from "@/lib/utils";

/** The "Pages" mega-menu: opens on hover with a pointer, on click on touch. */
export default function PagesDropdown() {
  const { open, rootProps, toggleProps } = useDropdown();

  return (
    <div className="nav-dropdown" data-dropdown="1" {...rootProps}>
      <button className="nav-dropdown-toggle" data-dropdown-toggle="1" type="button" {...toggleProps}>
        <div className="nav-dropdown-icon" />
        <div className="nav-link-text dropdown">Pages</div>
      </button>
      <div
        className={cx("nav-dropdown-list-wrap shadow-three mobile-shadow-hide pages", open && "is-open")}
        data-dropdown-list="1"
      >
        <div className="nav-dropdown-list-body">
          {pagesDropdown.map((group, i) => (
            <Fragment key={group.title}>
              {i > 0 && <div className="horizontal-line" />}
              <div className={cx("nav-dropdown-list", i === pagesDropdown.length - 1 && "_01")}>
                <div className="p-text-03 white-60 margin-bottom-24">{group.title}</div>
                {group.links.map((link) => (
                  <SiteLink
                    className="dropdown-link inline-block"
                    href={link.href}
                    key={link.label}
                  >
                    <div className="dropdown-link-text-wrap">
                      <div className="paragraph-text-03 dropdown-link-text">{link.label}</div>
                      <div className="paragraph-text-03 dropdown-link-text">{link.label}</div>
                    </div>
                  </SiteLink>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
