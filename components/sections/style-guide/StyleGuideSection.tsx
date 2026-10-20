import type { ReactNode } from "react";
import { OutlineButton, PrimaryButton } from "@/components/ui/Buttons";
import { colorSwatches, typeSpecimens, type TypeSpecimen } from "@/data/style-guide";
import { cx } from "@/lib/utils";

/** The design system: type scale, colours and buttons. */
export default function StyleGuideSection() {
  return (
    <section className="style-guide">
      <div className="container">
        <div className="style-guide-wrap">
          <StyleGuideGroup title="Typography">
            <div className="typography-wraper">
              {typeSpecimens.map((specimen) => (
                <TypeSpecimenRow key={specimen.label} {...specimen} />
              ))}
            </div>
          </StyleGuideGroup>
          <StyleGuideGroup title="Color">
            <div className="color-wraper">
              {colorSwatches.map((swatch) => (
                <div className={cx("color-blok", swatch.className, "reveal-up-blur")} id={swatch.id} key={swatch.id}>
                  {swatch.codes.map((code) => (
                    <div className={code.className} key={code.label}>
                      {code.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </StyleGuideGroup>
          <StyleGuideGroup title="Button">
            <div className="buttons-wraper reveal-up-blur">
              <PrimaryButton href="/contact">Get Started</PrimaryButton>
              <OutlineButton href="/contact">Learn More</OutlineButton>
            </div>
          </StyleGuideGroup>
        </div>
      </div>
    </section>
  );
}

type StyleGuideGroupProps = { title: string; children: ReactNode };

function StyleGuideGroup({ title, children }: StyleGuideGroupProps) {
  return (
    <div className="contented-main-wraper">
      <div className="contend-title style-guide-contend-title reveal-rise-lg">
        <h2 className="h2">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function TypeSpecimenRow({ tag: Tag, className, label, size, weight, lineHeight, letterSpacing }: TypeSpecimen) {
  return (
    <div className="typography-wrap reveal-up-blur">
      <Tag className={className}>{label}</Tag>
      <div className="typography-details">
        <p className="p-text-03">Name: Inter Tight</p>
        <p className="p-text-03">{`Size: ${size}`}</p>
        <p className="p-text-03">{`Weight: ${weight}`}</p>
        <p className="p-text-03">{`Line Height: ${lineHeight}`}</p>
        <p className="p-text-03">{`Letter Spacing: ${letterSpacing}`}</p>
      </div>
    </div>
  );
}
