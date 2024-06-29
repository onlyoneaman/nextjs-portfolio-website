import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';

const ProjectCard = ({post}) => {
  return(
    <Link href={`/projects/${post.slug}`}>
      <Card className="bg-transparent border-transparent hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-2"
        >
          <div className="min-w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md mb-4"></div>
          <div
            className="flex flex-col gap-1"
          >
            <h2 className="text-xl font-semibold text-white">{post.title}</h2>
            <h4 className="text-sm text-zinc-400">
              {post.description}
            </h4>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
};

export default ProjectCard;
