import SiteLink from "@/components/ui/SiteLink";
import type { BlogPost } from "@/data/blog";
import { img } from "@/lib/utils";

/** A post card (image, category pill, title, meta) used on the index and under posts. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div role="listitem">
      <SiteLink className="blog-list-wrap inline-block reveal-rise" href={`/blog/${post.slug}`}>
        <div className="blog-image-wrap">
          <img alt={post.title} className="fit-cover border-radius-24" loading="lazy" src={img(post.thumbnail)} />
        </div>
        <div className="blogtitle-wrap">
          <div className="blog-title-main">
            <div className="blog-cta-wrap">
              <div className="blog-catagory bg-primary-gradient _01">{post.category}</div>
            </div>
            <h4>{post.title}</h4>
          </div>
          <div className="blog-details-wrap">
            <div className="p-text-03 text-white-60">{post.author}</div>
            <div className="horizontal-line _60-white" />
            <div className="p-text-03 text-white-60">{post.date}</div>
            <div className="horizontal-line _60-white" />
            <div className="p-text-03 text-white-60">{post.readTime}</div>
          </div>
        </div>
        <div className="blog-hover-shadow" />
      </SiteLink>
    </div>
  );
}

/** The card grid; wrapped in a bare div like the template's CMS list. */
export function BlogCardList({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <div className="collection-list-2" role="list">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
