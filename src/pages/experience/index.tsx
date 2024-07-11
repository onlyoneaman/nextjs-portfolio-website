import React from 'react';
import {Experience} from "@/types";
import experiencesData from "@/pages/experience/experiencesData.ts";

const TimelineItem: React.FC<Experience> = (
  {
    date,
    title,
    description,
    website,
    points
  }) => {

  return(
    <div className="timeline-item mb-8">
      <div className="timeline-item-content bg-slate p-6 rounded-lg shadow-md relative">
      <span
        className="tag bg-oldsilver text-white px-3 py-1 rounded-full absolute top-0 left-0 transform -translate-y-1/2"
      >
        {date}
      </span>
        <a
          href={website}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <h3
            className="text-xl text-white font-semibold mt-2 hover:underline cursor-pointer transition-colors duration-200 ease-in-out"
          >
            {title}
          </h3>
        </a>
        <p className="hidden">
          {description}
        </p>
        <div>
          {points && (
            <ul className="list-disc list-inside mt-2">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
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

const JourneyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">
          {"Aman's Journey"}
        </h1>
        <p className="text-lg mt-2">
          A timeline of my professional experiences and achievements.
        </p>
      </header>
      <main className="w-full max-w-4xl mt-8">
        <div className="timeline">
          {experiencesData.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              description={exp.description}
              points={exp.points}
              website={exp.website}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default JourneyPage;
