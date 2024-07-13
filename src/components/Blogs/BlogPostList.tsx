import React from 'react';
import BlogCard from "@/components/Blogs/BlogCard";
import ContainerTitle from "@/components/Common/ContainerTitle";
import {Blog} from "@/types";

type BlogPostListProps = {
  posts: Blog[];
  minimized?: boolean;
};

const BlogPostList = (
  {
    posts,
    minimized = false
  }: BlogPostListProps
) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  if(minimized) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Blog) => (
          <BlogCard key={post.slug} post={post}/>
        ))}
      </div>
    )
  }

  return (
    <div
      className="mx-auto sm:w-[80%] space-y-6"
    >
      <ContainerTitle
        title="Pensieve"
      />
      <p className="">
        A collection of thoughts, ideas, and musings. You can check more of my writings on my <a
        href="https://onlyoneaman.medium.com" target="_blank" rel="noopener noreferrer"
        className="text-blue-500">Medium</a> profile.
      </p>
      <div
        className="flex min-w-full flex-col gap-1"
      >
        {posts.map((post: Blog) => {
          if (post.hidden) return null;
          return (
            <BlogCard key={post.slug} post={post}/>
          )
        })}
      </div>
    </div>
  );
};

export default BlogPostList;
