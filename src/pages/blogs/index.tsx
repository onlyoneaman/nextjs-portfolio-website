import React from 'react';
import BlogPostList from "@/components/Blogs/BlogPostList";

import { getSortedPostsData } from '@/lib/blogs';
import SEO from "@/components/SEO.tsx";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const BlogsList = ({allPostsData}: any) => {

  return (
    <>
      <SEO title={"Blogs"} />
      <BlogPostList posts={allPostsData} />
    </>
  )
};

export default BlogsList;
