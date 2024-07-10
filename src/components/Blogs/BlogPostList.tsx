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
      <p className="">
        A collection of thoughts, ideas, and musings. You can check more of my writings on my <a href="https://onlyoneaman.medium.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Medium</a> profile.
      </p>
      <div
        className="flex min-w-full flex-col gap-1"
      >
        {posts.map((post: any) => {
          if(post.hidden) return null;
          return(
            <BlogCard key={post.slug} post={post} />
          )
        })}
      </div>
    </div>
  );
};

export default BlogPostList;
