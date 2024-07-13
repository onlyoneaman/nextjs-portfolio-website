import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle";
import ProjectCard from "@/components/Projects/ProjectCard";
import {Project} from "@/types";

type ProjectsListProps = {
  posts: Project[]
  minimized?: boolean
}

const ProjectsList = (
  {
    posts,
    minimized = false
  }: ProjectsListProps
) => {
  if (!posts || posts.length === 0) {
    return <p>No projects found.</p>;
  }

  if(minimized) {
    return(
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Project) => (
          <ProjectCard key={post.slug} item={post}/>
        ))}
      </div>
    )
  }

  return (
    <div
      className="mx-auto sm:w-[80%] space-y-6"
    >
      <ContainerTitle
        title="Projects"
      />
      <p className="">
        Playground - Small MVP to Production Apps
      </p>
      <div
        className="flex min-w-full flex-col gap-4"
      >
        {posts.map((post: Project) => (
          <ProjectCard key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
