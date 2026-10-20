import { brandLogoRows } from "@/data/home";
import { img } from "@/lib/utils";

export default function BrandLogoSection() {
  return (
    <section className="brand-logo">
      <div className="container brand-logo">
        <div className="brand-logo-wrap reveal-up-blur">
          <div className="top-caption">
            <p className="p-text-03">Trusted by 240+ Companies</p>
          </div>
          <div className="brand-logo-wraper">
            <div className="logo-wrap">
              {brandLogoRows.map((row, i) => (
                <div className="logo-outer" key={i}>
                  {row.map((logo, j) => (
                    <div className="logo-box" key={j}>
                      <img alt="" className="logo-icon" loading="lazy" src={img(logo)} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="brand-absolute-right" />
            <div className="brand-absolute-left" />
          </div>
        </div>
      </div>
    </section>
  );
}
