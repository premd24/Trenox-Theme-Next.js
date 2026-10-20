import { integrationArticle, type ArticleBlock } from "@/data/integrations";

type IntegrationDetailSectionProps = { intro: string };

/** The integration write-up (`integrations-single`): intro, features, a quote and setup steps. */
export default function IntegrationDetailSection({ intro }: IntegrationDetailSectionProps) {
  const { features, quote, setup } = integrationArticle;
  return (
    <section className="integrations-single">
      <div className="container">
        <div className="integrations-single-wrapper">
          <div className="p-text-01">{intro}</div>
          <RichText {...features} />
          <blockquote className="block-quote reveal-up-blur">{quote}</blockquote>
          <RichText {...setup} />
        </div>
      </div>
    </section>
  );
}

function RichText({ heading, text, points, className }: ArticleBlock) {
  return (
    <div className={`richtext ${className}`}>
      <h4>{heading}</h4>
      <p>{text}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
