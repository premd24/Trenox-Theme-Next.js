import { PrimaryButton } from "@/components/ui/Buttons";
import { blogPosts, blogTabs } from "@/data/blog";
import { useTabs } from "@/hooks/useTabs";
import { cx } from "@/lib/utils";
import { BlogCardList } from "./BlogCard";

/** Every post, filterable by category tabs. */
export default function BlogListSection() {
  const { active, tabProps } = useTabs(blogTabs);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog-wrap">
          <div className="small-button-text text-white-50 reveal-up-blur">FILTER BY CATEGORY</div>
          <div className="tabs">
            <div className="blog-top tab-menu reveal-up-blur" role="tablist">
              {blogTabs.map((tab) => (
                <a
                  className={cx("blog-catagory-link inline-block tab-link", active === tab && "is-active")}
                  key={tab}
                  {...tabProps(tab)}
                >
                  <div className="h5">{tab}</div>
                </a>
              ))}
            </div>
            <div className="blog-bottom tab-content">
              {blogTabs.map((tab) => (
                <div className={cx("tab-pane", active === tab && "is-active")} key={tab}>
                  <BlogCardList posts={tab === "All" ? blogPosts : blogPosts.filter((p) => p.category === tab)} />
                </div>
              ))}
            </div>
          </div>
          <div className="blog-button-wrap">
            <PrimaryButton href="/contact">Load More</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
