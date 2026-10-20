import type { GetStaticPaths, GetStaticProps } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BlogDetailsSection from "@/components/sections/blog/BlogDetailsSection";
import RecentBlogSection from "@/components/sections/blog/RecentBlogSection";
import PageHead from "@/components/ui/PageHead";
import CtaSection from "@/components/sections/CtaSection";
import { blogPosts, getPost, postLead, type BlogPost } from "@/data/blog";

type Props = { post: BlogPost };

export default function BlogPostPage({ post }: Props) {
  return (
    <>
      <PageHead title={`${post.title} | Trenox`} description={postLead} />
      <div className="page-wrapper">
        <Navbar />
        <BlogDetailsSection post={post} />
        <RecentBlogSection slugs={post.recent} />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, { slug: string }> = ({ params }) => {
  const post = params && getPost(params.slug);
  return post ? { props: { post } } : { notFound: true };
};
