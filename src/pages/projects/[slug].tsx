import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import {getSortedPostsData, getPostData} from '@/lib/projects';
import ProjectCard from "@/components/Projects/ProjectCard";
import {Button} from "@/components/ui/button";

const ProjectsPost = ({post}: any) => (
  <div className="max-w-2xl mx-auto mt-4 text-white space-y-3">
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    {/*<p className="text-zinc-400 mb-4">{post.date}</p>*/}
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-auto rounded-md"
    />
    <div className="prose prose-invert prose-lg">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>

    <div>
      <Link
        className="text-gray-500 hover:text-gray-300 transition-colors"
        href={post.link}
        target={"_blank"}
      >
        <Button>
          {post.label || "Link"}
        </Button>
      </Link>
    </div>
  </div>
);

const ProjectsPostList = ({posts}: any) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post: any) => (
      <ProjectCard key={post.slug} post={post}/>
    ))}
  </div>
);

const BlogPage = ({posts, post}: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <Link
          className="text-gray-500 hover:tracking-wider hover:text-gray-300 transition-colors mb-4 inline-block"
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
    </div>
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

export default BlogPage;
