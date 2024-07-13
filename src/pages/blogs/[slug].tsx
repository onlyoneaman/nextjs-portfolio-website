import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {getPostData, getSortedPostsData} from '@/lib/blogs';
import SEO from "@/components/SEO.tsx";
import {Blog} from "@/types";
import BlogPostList from "@/components/Blogs/BlogPostList.tsx";
import BlogPost from "@/components/Blogs/BlogPost.tsx";

type BlogsPageProps = {
  posts: Blog[];
  post: Blog;
};

const BlogPage = ({posts, post}: BlogsPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <SEO title={post.title}/>
      <div className="container px-4 py-8 max-w-2xl mx-auto">
        <Link
          className="text-gray-500 hover:tracking-wider hover:text-gray-300 transition-colors mb-4 inline-block"
          href="/blogs"
        >
          ← All Articles
        </Link>
        {post ? (
          <BlogPost post={post}/>
        ) : (
          <>
            <p className="text-zinc-400 mb-8">
              A collection of blog posts about web development, programming, and more.
            </p>
            <BlogPostList posts={posts} minimized/>
          </>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: {slug: post.slug},
  }));

  return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
  if (params?.slug) {
    const post = getPostData(params.slug);
    return {props: {post}};
  }

  const posts = getSortedPostsData();
  return {props: {posts}};
}

export default BlogPage;
