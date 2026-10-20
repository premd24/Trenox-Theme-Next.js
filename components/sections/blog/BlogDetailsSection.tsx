import SiteLink from "@/components/ui/SiteLink";
import { articleBody, blogWriterImage, shareLinks, type ArticleBlock, type BlogPost, type RichNode } from "@/data/blog";
import { cx, img } from "@/lib/utils";

/** The post itself: title block, main image, article body, author footer. */
export default function BlogDetailsSection({ post }: { post: BlogPost }) {
  return (
    <section className="blog-details">
      <div className="container">
        <div className="blog-single-details-wrap">
          <div className="blog-top-details-wrap">
            <div className="blog-info-wrap">
              <div className="blog-category-wrap">
                <div className="short-teg-wrap">
                  <div className="short-teg caption-linear-bg v2 reveal-grow">
                    <div className="tagline _01 reveal-left">{post.category}</div>
                  </div>
                </div>
                <div className="time-read-time reveal-left">
                  <div className="p-text-03 text-white-60">{post.date}</div>
                  <div className="horizontal-line" />
                  <div className="p-text-03 text-white-60">{post.readTime}</div>
                </div>
              </div>
              <h1 className="h2 reveal-rise-lg">{post.title}</h1>
              <AuthorShare author={post.author} className="reveal-up-blur" />
            </div>
            <div className="blog-single-image-wrap reveal-grow">
              <img alt={post.title} className="fit-cover border-radius-16" loading="lazy" src={img(post.mainImage)} />
            </div>
            {articleBody.map((block, i) => (
              <ArticleBlockView alt={post.title} block={block} key={i} />
            ))}
          </div>
          <div className="blog-details-bottom reveal-grow">
            <AuthorShare author={post.author} />
            <div className="vertical-divider v2" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Author avatar and name, with the social share links. */
function AuthorShare({ author, className }: { author: string; className?: string }) {
  return (
    <div className={cx("bloger-info-wrap", className)}>
      <div className="bloger-info">
        <img alt={author} className="bloger-image" loading="lazy" src={img(blogWriterImage)} />
        <div className="p-text-03 text-white-60">{author}</div>
      </div>
      <div className="social-share">
        <div className="tagline">Share :</div>
        <div className="social-icon-wrap">
          {shareLinks.map((link) => (
            <SiteLink className="social-icon-list inline-block" external href={link.href} key={link.href}>
              <img alt="" className="social-icon" loading="lazy" src={img(link.icon)} />
            </SiteLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/** One block of the article: a run of text, or a pair of images (alt = post title). */
function ArticleBlockView({ block, alt }: { block: ArticleBlock; alt: string }) {
  if (block.type === "images") {
    return (
      <div className="blog-single-image-wrap">
        {block.images.map((src) => (
          <div className="blog-single-image reveal-up-blur" key={src}>
            <img alt={alt} className="fit-cover border-radius-24" loading="lazy" src={img(src)} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="blog-single-details">
      {block.lead && <p className="p-text-01 reveal-up-blur">{block.lead}</p>}
      {block.richtexts.map((nodes, i) => (
        <div className="richtext reveal-up-blur" key={i}>
          {nodes.map((node, j) => (
            <RichNodeView key={j} node={node} />
          ))}
        </div>
      ))}
    </div>
  );
}

function RichNodeView({ node }: { node: RichNode }) {
  if ("h4" in node) return <h4>{node.h4}</h4>;
  return (
    <p>
      {node.p.map((part, i) => (typeof part === "string" ? part : <strong key={i}>{part.strong}</strong>))}
    </p>
  );
}
