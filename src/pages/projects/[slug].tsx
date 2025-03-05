import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {getPostData, getSortedPostsData} from '@/lib/projects';
import SEO from "@/components/SEO.tsx";
import ProjectsPost from "@/components/Projects/ProjectsPost.tsx";
import ProjectsList from "@/components/Projects/ProjectsList.tsx";
import {Project} from "@/types/project.ts";

type ProjectPageProps = {
  posts: Project[]
  post: Project
}

const ProjectPage = ({posts, post}: ProjectPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <SEO title={post.title}/>
      <div className="container mx-auto max-w-2xl px-2 md:px-4 py-5 md:py-8">
        <Link
          className="hover:tracking-wide hover:underline transition-colors mb-4 inline-block"
          href="/projects"
        >
          ← All Projects
        </Link>
        {post ? (
          <ProjectsPost post={post}/>
        ) : (
          <>
            <p className="text-gray-200 dark:text-zinc-400 mb-8">
              Playground - Small MVP to Production Apps
            </p>
            <ProjectsList minimized posts={posts}/>
          </>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: {slug: post.slug},
  }));

  return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
  if (params?.slug) {
    const post = getPostData(params.slug);
    return {props: {post}};
  }

  const posts = getSortedPostsData();
  return {props: {posts}};
}

export default ProjectPage;
