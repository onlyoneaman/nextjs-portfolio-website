import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getSortedPostsData, getPostData } from '@/lib/blogs';
import BlogCard from '@/components/Blogs/BlogCard';
import Image from "next/image";
import {Button} from "@/components/ui/button.tsx";
import SEO from "@/components/SEO.tsx";

const BlogPost = ({ post }: any) => (
  <div className="max-w-2xl mx-auto mt-4 text-oldsilver space-y-5">
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-white">{post.title}</h1>
      <p className="text-zinc-400 mb-4">{post.date}</p>
    </div>

    <div>
      <Image
        className="rounded-md"
        src={post.image}
        alt={post.title}
        width={768}
        height={96}
      />
    </div>

    <div className="prose prose-invert prose-lg">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>

    <div>
      {
        post.link && (
          <Link
            href={post.link}
            target={"_blank"}
          >
            <Button>
              {post.label ?? "Visit"}
            </Button>
          </Link>
        )
      }
    </div>
  </div>
);

const BlogPostList = ({ posts }: any) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post: any) => (
      <BlogCard key={post.slug} post={post} />
    ))}
  </div>
);

const BlogPage = ({ posts, post }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <SEO title={post.title} />
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
    </>
  );
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  if (params?.slug) {
    const post = getPostData(params.slug);
    return { props: { post } };
  }

  const posts = getSortedPostsData();
  return { props: { posts } };
}

export default BlogPage;
