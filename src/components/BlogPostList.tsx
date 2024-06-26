import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="flex flex-col">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
