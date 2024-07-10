import React from 'react';

import { getSortedPostsData } from '@/lib/projects';
import ProjectsList from "@/components/Projects/ProjectsList";
import SEO from "@/components/SEO.tsx";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const ProjectsHome = ({allPostsData}: any) => {

  return (
    <>
      <SEO title={"Projects"} />
      <ProjectsList posts={allPostsData} />
    </>
  )
};

export default ProjectsHome;
