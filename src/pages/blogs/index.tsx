import React from 'react';
import BlogPostList from "@/components/Blogs/BlogPostList";

import { getSortedPostsData } from '@/lib/blogs';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const BlogsList = ({allPostsData}) => {

  return <BlogPostList posts={allPostsData} />
};

export default BlogsList;
