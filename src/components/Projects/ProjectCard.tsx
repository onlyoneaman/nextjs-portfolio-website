import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import {Button} from "@/components/ui/button";
import {Project} from "@/types";
import {Badge} from "@/components/ui/badge.tsx";

type ProjectCardProps = {
  item: Project
}

const ProjectCard = ({item}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${item.slug}`}>
      <Card
        className="bg-transparent border-transparent text-oldsilver hover:border-zinc-800 min-w-full h-full"
      >
        <CardHeader
          className="p-2 flex flex-col h-full justify-between gap-1"
        >
          <div className={"space-y-2"}>
            <img
              className="max-h-24 w-full sm:max-h-36 md:max-h-48 object-cover rounded-md"
              src={item.image}
              alt={item.title}
            />
            <h2 className="font-semibold text-white leading-none line-clamp-1">
              {item.title}
            </h2>
            <h4 className="text-xs line-clamp-2">
              {item.description}
            </h4>
          </div>

          {
            item.link && (
              <div className="flex flex-row items-center gap-2">
                <Button
                  size={"sm"}
                  className="text-white hover:text-zinc-400 h-6"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                >
                  {item.label || "Visit"}
                </Button>

                <div
                  className="flex gap-1 overflow-hidden"
                >
                  {item.tags?.map((tag, index) => (
                    <span
                      className="text-xs bg-zinc-800 text-white px-2 py-0.5 rounded-full line-clamp-1"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          }
        </CardHeader>
      </Card>
    </Link>
  )
};

export default ProjectCard;
