import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";
import {getStyles} from "@/helpers/styleFunctions.ts";
import React from "react";
import {readingTime} from 'reading-time-estimator'
import {Blog} from "@/types/blog.ts";

type BlogPostProps = {
  post: Blog;
};

const BlogPost = ({post}: BlogPostProps) => {
  const readingResult = readingTime(post.content);

  return (
    <div className="mt-2 text-oldsilver space-y-5">
      <div className="space-y-1">
        <h1 className="text-xl md:text-3xl font-bold text-white">{post.title}</h1>

        <h3 className="text-md md:text-lg text-zinc-200">
          {post.highlight}
        </h3>

        <h4 className="text-sm md:text-md">
          {post.description}
        </h4>

        <div
          className="space-x-2"
        >
          <span className="text-zinc-400">{post.date}</span>
          <span>
            •
          </span>
          <span className="text-zinc-500 text-md">{readingResult.text}</span>
        </div>
      </div>

      {
        post.image && (
          <div>
            <Image
              className="rounded-md"
              src={post.image}
              alt={post.title}
              width={768}
              height={96}
            />
          </div>
        )
      }

      <div className="prose prose-invert prose-lg py-5">
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </div>

      <div>
        {
          post.link && (
            <Link
              href={post.link}
              target={"_blank"}
            >
              <Button
                className={getStyles('primary')}
              >
                {post.label ?? "Visit"}
              </Button>
            </Link>
          )
        }
      </div>
    </div>
  )
};

export default BlogPost;
