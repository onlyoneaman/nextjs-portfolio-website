import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import {Button} from "@/components/ui/button";

const ProjectCard = ({post}: any) => {
  return(
    <Link href={`/projects/${post.slug}`}>
      <Card className="bg-transparent border-transparent text-oldsilver hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-4"
        >
          <img
            src={post.image}
            alt={post.title}
            className="min-w-52 h-32 object-cover rounded-md"
          />
          <div
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-white">
                {post.title}
              </h2>
              <h4 className="text-xs">
                {post.description}
              </h4>
            </div>

            <div>
              <Button
                className="text-white hover:text-zinc-400"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(post.link, "_blank");
                }}
              >
                {post.label || "Visit"}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
};

export default ProjectCard;
