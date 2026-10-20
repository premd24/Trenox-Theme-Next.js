import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import { faqs } from "@/data/home";
import { useCollapse } from "@/hooks/useCollapse";
import { img } from "@/lib/utils";

export default function FaqSection() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-left">
            <ShortTag label="FAQ" />
            <SectionHeading className="faq-heading">Frequently asked questions</SectionHeading>
          </div>
          <div className="faq-right">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FaqItemProps = { question: string; answer: string };

/** One accordion row; the answer slides open by animating its height. */
function FaqItem({ question, answer }: FaqItemProps) {
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
      <div
        className="faq-answer-wrap"
        data-accordion-panel="1"
        style={{ height: 0 }}
        {...panelProps}
      >
        <p className="p-text-03 text-white-60 faq-answer">{answer}</p>
      </div>
    </div>
  );
}
