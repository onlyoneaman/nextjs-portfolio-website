import React from 'react';

import {getSortedPostsData} from '@/lib/projects';
import ProjectsList from "@/components/Projects/ProjectsList";
import SEO from "@/components/SEO.tsx";
import {Project} from "@/types";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type ProjectsHomeProps = {
  allPostsData: Project[]
}

const ProjectsHome = ({allPostsData}: ProjectsHomeProps) => {

  return (
    <>
      <SEO title={"Projects"}/>
      <ProjectsList posts={allPostsData}/>
    </>
  )
};

export default ProjectsHome;
