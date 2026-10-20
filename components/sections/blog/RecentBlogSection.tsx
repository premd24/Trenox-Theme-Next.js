import { getPost, type BlogPost } from "@/data/blog";
import { BlogCardList } from "./BlogCard";

/** "You might also like": three other posts. */
export default function RecentBlogSection({ slugs }: { slugs: string[] }) {
  const posts = slugs.map(getPost).filter((p): p is BlogPost => Boolean(p));

  return (
    <section className="recent-blog">
      <div className="container">
        <div className="recent-blog-wrap">
          <div className="heading-wrap recent-blog-heading reveal-rise-lg">
            <h2 className="h2 text-linear">You might also like</h2>
          </div>
          <BlogCardList posts={posts} />
        </div>
      </div>
    </section>
  );
}
