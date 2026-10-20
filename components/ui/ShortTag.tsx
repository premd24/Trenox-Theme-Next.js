import { img } from "@/lib/utils";

type ShortTagProps = { label: string };

/** The small gradient pill above section headings ("Our Features ✦"). */
export default function ShortTag({ label }: ShortTagProps) {
  return (
    <div className="short-teg-wrap reveal-up-blur">
      <div className="short-teg caption-linear-bg reveal-grow">
        <div className="tagline _01 reveal-left">{label}</div>
        <div className="teg-icon reveal-left">
          <img alt="" className="fit-cover" loading="lazy" src={img("Top-str.svg")} />
        </div>
      </div>
    </div>
  );
}
