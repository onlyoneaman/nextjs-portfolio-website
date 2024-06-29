import React from 'react';

import { getSortedPostsData } from '@/lib/projects';
import ProjectsList from "@/components/Projects/ProjectsList";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const ProjectsHome = ({allPostsData}: any) => {

  return <ProjectsList posts={allPostsData} />
};

export default ProjectsHome;
