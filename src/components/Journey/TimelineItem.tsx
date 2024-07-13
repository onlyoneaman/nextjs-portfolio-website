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
    fullLogo
  } = item;

  return (
    <div className="timeline-item mb-8">
      <div className="timeline-item-content bg-slate p-6 rounded-lg shadow-md relative">
      <span
        className="tag bg-oldsilver text-white px-3 py-1 rounded-full absolute top-0 left-0 transform -translate-y-1/2"
      >
        {date}
      </span>
        <a
          className="flex flex-row items-center justify-between w-full"
          href={website}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <h3
            className="text-xl hover:underline text-white font-semibold mt-2 cursor-pointer transition-colors duration-200 ease-in-out"
          >
            {title}
          </h3>

          {
            fullLogo && (
              <img
                src={fullLogo}
                alt={title}
                className="w-12 md:w-32 object-cover"
              />
            )
          }
        </a>
        <p className="">
          {description}
        </p>
        <div>
          {points && (
            <ul
              className="list-disc list-inside mt-2"
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
        <span
          className="circle w-4 h-4 bg-oldsilver absolute top-0 left-0 transform -translate-x-1/2 rounded-full"
        />
      </div>
    </div>
  )
};

export default TimelineItem;
