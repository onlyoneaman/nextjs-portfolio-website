import React from 'react';
import experiencesData from "@/data/experiencesData.ts";
import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import TimelineItem from "@/components/Journey/TimelineItem.tsx";

const JourneyPage: React.FC = () => {
  return (
    <div
      className="mx-auto space-y-6"
    >
      <ContainerTitle title={"Aman's Journey"} />
      <p>
        A timeline of my professional experiences.
      </p>
      <div
        className="flex min-w-full flex-col gap-4 py-5"
      >
        {experiencesData.map((exp, index) => (
          <TimelineItem
            key={index}
            item={exp}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyPage;
