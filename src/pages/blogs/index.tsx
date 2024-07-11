import React from 'react';
import BlogPostList from "@/components/Blogs/BlogPostList";

import {getSortedPostsData} from '@/lib/blogs';
import SEO from "@/components/SEO.tsx";
import {Blog} from "@/types";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type BlogsListProps = {
  allPostsData: Blog[];
};

const BlogsList = ({allPostsData}: BlogsListProps) => {

  return (
    <>
      <SEO title={"Blogs"}/>
      <BlogPostList posts={allPostsData}/>
    </>
  )
};

export default BlogsList;
