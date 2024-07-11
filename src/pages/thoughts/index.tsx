import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import moment from "moment";

interface Thought {
  date: string;
  contentHtml: string;
}

interface Props {
  thoughts: Thought[];
}

const ThoughtsPage: React.FC<Props> = ({ thoughts }) => {
  return (
    <div className="flex flex-col space-y-6">
      <ContainerTitle title={"Thoughts"} />
      <p>
        A log of my thoughts, sorted by date.
      </p>
      <main
        className="w-full max-w-4xl space-y-4"
      >
        {thoughts.map((thought, index) => (
          <div
            key={index}
            className="p-4 md:p-5 bg-slate rounded-lg shadow-md"
          >
            <h2 className="text-sm text-white">
              {moment(thought.date).format("MMM D, YYYY")}
            </h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: thought.contentHtml }}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const thoughtsDirectory = path.join(process.cwd(), 'content/thoughts');
  const years = fs.readdirSync(thoughtsDirectory);
  let thoughts: Thought[] = [];

  for (const year of years) {
    const months = fs.readdirSync(path.join(thoughtsDirectory, year));
    for (const month of months) {
      const days = fs.readdirSync(path.join(thoughtsDirectory, year, month));
      for (const day of days) {
        const fullPath = path.join(thoughtsDirectory, year, month, day);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        thoughts.push({
          date: `${year}-${month}-${day.split('-')[0]}`,
          contentHtml,
        });
      }
    }
  }

  thoughts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return {
    props: {
      thoughts,
    },
  };
}

export default ThoughtsPage;
