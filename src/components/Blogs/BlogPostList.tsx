import React from 'react';
import BlogCard from "@/components/Blogs/BlogCard";
import ContainerTitle from "@/components/Common/ContainerTitle";

const BlogPostList = ({ posts }: any) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div
      className="mx-auto w-[80%] space-y-6"
    >
      <ContainerTitle
        title="Pensieve"
      />
      <p className="text-gray-500">
        A collection of thoughts, ideas, and musings.
      </p>
      <div
        className="flex min-w-full flex-col gap-1"
      >
        {posts.map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
