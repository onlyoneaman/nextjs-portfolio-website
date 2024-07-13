import {Blog} from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";
import {getStyles} from "@/helpers/styleFunctions.ts";
import React from "react";

type BlogPostProps = {
  post: Blog;
};

const BlogPost = ({post}: BlogPostProps) => (
  <div className="mt-4 text-oldsilver space-y-5">
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-white">{post.title}</h1>
      <p className="text-zinc-400 mb-4">{post.date}</p>
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
);

export default BlogPost;
