import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getSortedPostsData, getPostData } from '@/lib/blogs';
import BlogCard from '@/components/Blogs/BlogCard';

const BlogPost = ({ post }) => (
  <div className="max-w-2xl mx-auto mt-4 text-white">
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <p className="text-zinc-400 mb-4">{post.date}</p>
    <div className="prose prose-invert prose-lg">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  </div>
);

const BlogPostList = ({ posts }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <BlogCard key={post.slug} post={post} />
    ))}
  </div>
);

const BlogPage = ({ posts, post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <Link
          className="text-gray-500 hover:tracking-wider hover:text-gray-300 transition-colors mb-4 inline-block"
          href="/blogs"
        >
          ← All Articles
        </Link>
        {post ? (
          <BlogPost post={post} />
        ) : (
          <>
            <p className="text-zinc-400 mb-8">
              A collection of blog posts about web development, programming, and more.
            </p>
            <BlogPostList posts={posts} />
          </>
        )}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  if (params?.slug) {
    const post = getPostData(params.slug);
    return { props: { post } };
  }

  const posts = getSortedPostsData();
  return { props: { posts } };
}

export default BlogPage;
