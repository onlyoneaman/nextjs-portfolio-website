import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import Image from "next/image";
import {Blog} from "@/types";

type BlogCardProps = {
  post: Blog
}

const BlogCard = ({post}: BlogCardProps) => {
  return(
    <Link href={`/blogs/${post.slug}`}>
      <Card
        className="text-oldsilver bg-transparent border-transparent hover:border-zinc-800 min-w-full h-full"
      >
        <CardHeader
          className="flex flex-col p-2 gap-2"
        >
          {(post.cardImage || post.image) ? (
            <img
              className="rounded-md object-cover h-24 sm:h-36 md:h-48"
              src={post.cardImage || post.image || ""}
              alt={post.title}
            />
          ) : (
            <div className="min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md"></div>
          )}
          <div
            className="flex flex-col gap-1"
          >
            <h2 className="font-semibold text-white line-clamp-1">
              {post.title}
            </h2>
            <h4 className="text-xs line-clamp-2">
              {post.description}
            </h4>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
};

export default BlogCard;
