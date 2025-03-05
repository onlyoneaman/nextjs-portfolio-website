import React from "react";
import {Experience} from "@/types";

type TimelineItemProps = {
  item: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = (
  {
    item
  }) => {
  const {
    date,
    title,
    description,
    website,
    points,
    fullLogo,
    role,
    companyName,
    techStack
  } = item;

  return (
    <div className="bg-neutral-300 dark:bg-slate p-4 md:p-6 rounded-lg shadow-md relative text-md">
      <span
        className="bg-neutral-400 dark:bg-oldsilver text-primary dark:text-white text-xs px-3 py-1 rounded-full absolute top-0 left-0 transform -translate-y-1/2"
      >
        {date}
      </span>
      <div
        className="relative space-y-1"
      >
        <a
          className="flex flex-row gap-3 items-center justify-between w-full"
          href={website}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <h3
            className="text-primary dark:text-white text-md md:text-lg lg:text-xl hover:underline font-semibold mt-2 cursor-pointer transition-colors duration-200 ease-in-out"
          >
            {title}
          </h3>

          {
            fullLogo && (
              <img
                src={fullLogo}
                alt={title}
                className="w-24 md:w-32 object-cover"
              />
            )
          }
        </a>
        <p className="text-sm sm:text-md">
          {description}
        </p>
        <div>
          {points && (
            <ul
              className="text-sm sm:text-md list-disc list-inside mt-2"
            >
              {points.map((point, index) => (
                <li
                  className=""
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="text-gray-800 text-xs py-2 dark:text-gray-300 flex flex-wrap gap-1 items-center"
        >
          <span>
            Tech Stack:
          </span>
          {
            techStack.map((tech, index) => (
              <>
                <span
                  key={index}
                >
                  {tech}
                </span>
                {index < techStack.length - 1 && (
                  <span>•</span>
                )}
              </>
            ))
          }
        </div>
      </div>
      <span
        className="circle w-4 h-4 bg-neutral-400 dark:bg-oldsilver absolute top-0 left-0 transform -translate-x-1/2 rounded-full"
      />
    </div>
  )
};

export default TimelineItem;
