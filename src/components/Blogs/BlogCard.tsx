import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const BlogCard = ({ post }) => (
  <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors min-w-full">
    <CardHeader>
      <div className="w-full h-40 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md mb-4"></div>
      <h2 className="text-xl font-semibold text-white">{post.title}</h2>
      <h4 className="text-sm text-zinc-400">
        {post.description}
      </h4>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-zinc-400">{post.excerpt}</p>
    </CardContent>
    <CardFooter>
      <Link href={`/blogs/${post.slug}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
        Read more
      </Link>
    </CardFooter>
  </Card>
);

export default BlogCard;
