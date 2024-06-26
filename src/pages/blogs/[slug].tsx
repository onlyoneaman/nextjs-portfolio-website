import React from 'react';
import BlogPostList from '@/components/BlogPostList';

const BlogPage = ({ posts }) => {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default BlogPage;
