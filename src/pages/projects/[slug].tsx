import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import {getSortedPostsData, getPostData} from '@/lib/projects';
import ProjectCard from "@/components/Projects/ProjectCard";
import {Button} from "@/components/ui/button";
import SEO from "@/components/SEO.tsx";

const ProjectsPost = ({post}: any) => {

  return(
    <div className="mx-auto mt-4 space-y-3">
      <h1 className="text-3xl font-bold text-white">
        {post.title}
      </h1>
      <h3 className="text-xl text-zinc-400">
        {post.description}
      </h3>
      {/*<p className="text-zinc-400 mb-4">{post.date}</p>*/}
      {
        post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="min-w-full h-96 object-cover rounded-md"
          />
        )
      }

      <div className="prose prose-invert prose-lg py-5">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div
        className="flex space-x-4"
      >
        <Link
          className="text-white hover:text-oldsilver transition-colors"
          href={post.link}
          target={"_blank"}
        >
          <Button>
            {post.label || "Link"}
          </Button>
        </Link>

        {
          post.secondaryLink && post.secondaryLabel && (
            <Link
              className="text-white hover:text-oldsilver transition-colors"
              href={post.secondaryLink}
              target={"_blank"}
            >
              <Button>
                {post.secondaryLabel}
              </Button>
            </Link>
          )
        }
      </div>
    </div>
  )
};

const ProjectsPostList = ({posts}: any) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post: any) => (
      <ProjectCard key={post.slug} post={post}/>
    ))}
  </div>
);

const ProjectPage = ({posts, post}: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <SEO title={post.title} />
      <div className="container mx-auto max-w-2xl px-4 py-8">
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
            <p className="text-zinc-400 mb-8">
              Playground - Small MVP to Production Apps
            </p>
            <ProjectsPostList posts={posts}/>
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
