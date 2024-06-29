import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle";
import ProjectCard from "@/components/Projects/ProjectCard";

const ProjectsList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div
      className="mx-auto w-[80%] space-y-6"
    >
      <ContainerTitle
        title="Projects"
      />
      <p className="text-gray-500">
        Playground - Small MVP to Production Apps
      </p>
      <div
        className="flex min-w-full flex-col gap-4"
      >
        {posts.map((post) => (
          <ProjectCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
