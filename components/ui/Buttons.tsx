import SiteLink from "@/components/ui/SiteLink";
import { cx, img } from "@/lib/utils";

/* Every button swaps two stacked copies of its label on hover, so the label is
   rendered twice. */

type ButtonProps = { href: string; children: string; className?: string };

/** Solid white button with an arrow; the gradient fills in on hover. */
export function PrimaryButton({ href, children, className }: ButtonProps) {
  return (
    <SiteLink className={cx("button-01", className, "inline-block")} href={href}>
      <div className="button-text-icon-wrap">
        <div className="button-text-wrapper">
          <div className="button-text-01 text-black">{children}</div>
          <div className="button-text-01 text-white">{children}</div>
        </div>
        <div className="button-icon-wrap">
          <img alt="" className="button-icon _01" loading="lazy" src={img("Vector-Top.svg")} />
          <img alt="" className="button-icon _02" loading="lazy" src={img("Vector-Top-White.svg")} />
        </div>
      </div>
      <div className="hover-color bg-primary-gradient" />
    </SiteLink>
  );
}

type OutlineButtonProps = ButtonProps & { showIcon?: boolean };

/** Bordered button; the hero version leads with a play icon. */
export function OutlineButton({ href, children, className, showIcon = true }: OutlineButtonProps) {
  return (
    <SiteLink className={cx("button-02", className, "inline-block")} href={href}>
      <div className="button-02-cover">
        <img
          alt=""
          className={cx("button-icon", !showIcon && "hide")}
          loading="lazy"
          src={img("Polygon-4.svg")}
        />
        <div className="button-02-text">
          <div className="button-text-01 text-white">{children}</div>
          <div className="button-text-01 text-white">{children}</div>
        </div>
      </div>
    </SiteLink>
  );
}

/** Small pill button used for "Login" in the navbar. */
export function SmallButton({ href, children }: ButtonProps) {
  return (
    <SiteLink className="button-03 inline-block" href={href}>
      <div className="button-03-text-wrap">
        <div className="small-button-text text-black">{children}</div>
        <div className="small-button-text text-white">{children}</div>
      </div>
    </SiteLink>
  );
}

