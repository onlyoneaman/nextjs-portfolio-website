import {Project} from "@/types";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";
import {getStyles} from "@/helpers/styleFunctions.ts";
import React from "react";

type ProjectsPostProps = {
  post: Project
}

const ProjectsPost = ({post}: ProjectsPostProps) => {

  return (
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
        {
          post.link && post.label && (
            <Link
              href={post.link}
              target={"_blank"}
            >
              <Button
                className={getStyles("primary")}
              >
                {post.label || "Link"}
              </Button>
            </Link>
          )
        }

        {
          post.secondaryLink && post.secondaryLabel && (
            <Link
              href={post.secondaryLink}
              target={"_blank"}
            >
              <Button
                className={getStyles("secondary")}
              >
                {post.secondaryLabel}
              </Button>
            </Link>
          )
        }
      </div>

    </div>
  )
};

export default ProjectsPost;
