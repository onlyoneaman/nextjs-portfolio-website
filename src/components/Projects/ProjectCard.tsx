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
      <Card className="bg-transparent border-transparent text-oldsilver hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-32 min-w-32 sm:max-w-52 sm:min-w-52 h-24 sm:h-32 object-cover rounded-md"
          />
          <div
            className="flex flex-col justify-between gap-1"
          >
            <div className={"space-y-1"}>
              <h2 className="font-semibold text-white leading-none line-clamp-1">
                {item.title}
              </h2>
              <h4 className="text-xs line-clamp-2">
                {item.description}
              </h4>

              <div
                className="flex gap-1"
              >
                {item.tags?.map((tag, index) => (
                  <span
                    className="text-xs bg-zinc-800 text-white px-2 py-0.5 rounded-full"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {
              item.link && (
                <div>
                  <Button
                    size={"sm"}
                    className="text-white hover:text-zinc-400"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.link) {
                        window.open(item.link, "_blank");
                      }
                    }}
                  >
                    {item.label || "Visit"}
                  </Button>
                </div>
              )
            }
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
};

export default ProjectCard;
