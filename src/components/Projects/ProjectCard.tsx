import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {Project, ProjectActiveEnum, ProjectArchivedEnum} from "@/types/project.ts";

type ProjectCardProps = {
  item: Project
}

const ProjectCard = ({item}: ProjectCardProps) => {
  const {
    title,
    description,
    image,
    link,
    status,
    tags,
    slug,
    label,
  } = item;

  const getStatusTagStyle = () => {
    switch (status) {
      case "active":
        return "bg-green-200";
      case "archived":
        return "bg-red-200";
      default:
        return "bg-gray-500";
    }
  }

  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        className="w-full h-full"
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Card
          className="bg-transparent border-transparent text-oldsilver hover:border-zinc-800 w-full h-full"
        >
          <CardHeader
            className="p-2 flex flex-col h-full justify-between gap-1"
          >
            <div className={"space-y-2"}>
              <img
                className="max-h-24 w-full sm:max-h-36 md:max-h-48 object-cover rounded-md"
                src={image}
                alt={title}
              />
              <h2 className="font-semibold text-white leading-none line-clamp-1">
                {title}
              </h2>
              <h4 className="text-xs line-clamp-2">
                {description}
              </h4>
            </div>

            <div className="space-y-1">
              {
                link && (
                  <div className="flex flex-row items-center justify-between gap-2">
                    <Button
                      size={"sm"}
                      className="text-white hover:text-zinc-400 h-6"
                      onClick={(e) => {
                        e.preventDefault();
                        if (link) {
                          window.open(link, "_blank");
                        }
                      }}
                    >
                      {label || "Visit"}
                    </Button>

                    {
                      status && (
                        <span
                          className={
                            `text-xs px-2 py-0.5 rounded-full text-black ${getStatusTagStyle()}`
                          }
                        >
                          {status}
                        </span>
                      )
                    }
                  </div>
                )
              }

              <div>
                <div
                  className="flex gap-1 overflow-hidden"
                >
                  {tags?.map((tag, index) => (
                    <span
                      className="text-xs bg-zinc-800 text-white px-2 py-0.5 rounded-full line-clamp-1"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  )
};

export default ProjectCard;
