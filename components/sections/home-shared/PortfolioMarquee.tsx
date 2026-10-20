import { portfolioMarquee } from "@/data/home-shared";
import { cx, img } from "@/lib/utils";

/** "Portofolio Management" card art: two bands of tiles drifting in opposite directions. */
export default function PortfolioMarquee({ variant }: { variant: "_01" | "_02" }) {
  return (
    <div className={cx("features-01-outer-wrap", variant)}>
      {portfolioMarquee.map((band, i) => (
        <div className={cx("features-card-image-wrap", band.reverse && "right-to-left")} key={i}>
          {band.rows.map((row, j) => (
            <div className="features-01-outer" key={j}>
              {row.map((image, k) => (
                <div className="features-01-image-box" key={k}>
                  <img alt="" className="features-box-image" loading="lazy" src={img(image)} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className="move-animation-shadow-right" />
      <div className="move-animation-shadow-left" />
    </div>
  );
}
