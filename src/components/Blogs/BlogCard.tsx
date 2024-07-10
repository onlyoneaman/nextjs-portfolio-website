import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import Image from "next/image";

const BlogCard = ({post}: any) => {
  return(
    <Link href={`/blogs/${post.slug}`}>
      <Card className="text-oldsilver bg-transparent border-transparent hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-2"
        >
          {(post.cardImage || post.image) ? (
            <Image
              className="rounded-md"
              src={post.cardImage || post.image}
              alt={post.title}
              width={144}
              height={96}
            />
          ) : (
            <div className="min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md"></div>
          )}
          <div
            className="flex flex-col gap-1"
          >
            <h2 className="font-semibold text-white">
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
