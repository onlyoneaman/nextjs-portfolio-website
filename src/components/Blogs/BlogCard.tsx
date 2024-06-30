import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';

const BlogCard = ({post}: any) => {
  return(
    <Link href={`/blogs/${post.slug}`}>
      <Card className="bg-transparent border-transparent hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-2"
        >
          <div className="min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md mb-4"></div>
          <div
            className="flex flex-col gap-1"
          >
            <h2 className="font-semibold text-white">{post.title}</h2>
            <h4 className="text-xs text-zinc-400 line-clamp-2">
              {post.description}
            </h4>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
};

export default BlogCard;
