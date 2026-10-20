import { useState } from "react";
import { faqCategories, type FaqEntry } from "@/data/faq-page";
import { useCollapse } from "@/hooks/useCollapse";
import { cx, img } from "@/lib/utils";

/** FAQ grouped by category (`faq-v1`), with a side menu of in-page anchors. */
export default function FaqCategoriesSection() {
  return (
    <section className="faq-v1">
      <div className="container">
        <div className="faq-v1-wrap">
          <div className="faq-v1-left">
            {faqCategories.map((category) => (
              <a className="faq-menu-list inline-block reveal-up-blur" href={`#${category.id}`} key={category.id}>
                <div className="faq-menu-text">{category.menuLabel}</div>
              </a>
            ))}
          </div>
          <div className="faq-v1-right">
            {faqCategories.map((category) => (
              <div className={cx("faq-item-box", category.boxClass)} id={category.id} key={category.id}>
                <h5 className="h5 text-white-70">{category.title}</h5>
                <div className="faq-box-wrap">
                  {category.items.map((item) => (
                    <FaqItem key={item.question} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** One accordion row; the answer slides open by animating its height. */
function FaqItem({ question, answer }: FaqEntry) {
  const [open, setOpen] = useState(false);
  const panelProps = useCollapse(open);

  return (
    <div className="faq-list reveal-up-blur">
      <button
        aria-expanded={open}
        className="faq-question-wrap"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <p className="p-text-02">{question}</p>
        <div className="faq-icon-wrap">
          <img alt="Arrow UP" className="faq-icon _01" loading="lazy" src={img("arrow-square-left.svg")} />
          <img alt="Arrow UP" className="faq-icon" loading="lazy" src={img("arrow-square-left-1.svg")} />
        </div>
      </button>
      <div className="faq-answer-wrap" data-accordion-panel="1" style={{ height: 0 }} {...panelProps}>
        <p className="p-text-03 text-white-60 faq-answer">{answer}</p>
      </div>
    </div>
  );
}
