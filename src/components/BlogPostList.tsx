import React from 'react';
import BlogCard from "@/components/Blogs/BlogCard";

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div
      className="min-w-full"
    >
      <div
        className="flex min-w-full flex-row gap-2 flex-wrap"
      >
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
