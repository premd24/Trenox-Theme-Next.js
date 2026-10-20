import ShortTag from "@/components/ui/ShortTag";
import { img } from "@/lib/utils";

export default function PurposeSection() {
  return (
    <section className="purpose">
      <div className="container">
        <div className="purpose-wrap">
          <div className="purpose-image-wrap">
            <img
              alt=""
              className="fit-cover border-radius-24 reveal-shrink"
              loading="lazy"
              src={img("About-V2.avif")}
            />
            <div className="purpose-image-shadow" />
          </div>
          <div className="purpose-text-wrap reveal-grow">
            <ShortTag label="Our Purpose" />
            <h3 className="h3">Our Vision Statement</h3>
            <div className="p-text-03 text-white-70">
              Establishing a compelling brand presence and a user-friendly website is vital for your enterprise, serving
              as the initial touchpoint for prospective customers. These elements not only showcase your expertise but
              also build trust and reliability, which are essential in today&apos;s fiercely competitive market.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
