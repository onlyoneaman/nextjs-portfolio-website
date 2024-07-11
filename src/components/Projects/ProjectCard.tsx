import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import {Button} from "@/components/ui/button";
import {Project} from "@/types";

type ProjectCardProps = {
  item: Project
}

const ProjectCard = ({item}: ProjectCardProps) => {
  return(
    <Link href={`/projects/${item.slug}`}>
      <Card className="bg-transparent border-transparent text-oldsilver hover:border-zinc-800 min-w-full">
        <CardHeader
          className="flex flex-row p-2 gap-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-52 min-w-52 h-32 object-cover rounded-md"
          />
          <div
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-white">
                {item.title}
              </h2>
              <h4 className="text-xs">
                {item.description}
              </h4>
            </div>

            {
              item.link && (
                <div>
                  <Button
                    className="text-white hover:text-zinc-400"
                    onClick={(e) => {
                      e.preventDefault();
                      if(item.link) {
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
