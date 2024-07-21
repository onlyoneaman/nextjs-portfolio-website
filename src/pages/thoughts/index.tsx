import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import React, {useEffect} from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import moment from "moment";

interface Thought {
  date: string;
  contentHtml: string;
}

interface Props {
  thoughts: Thought[];
}

const processTags = () => {
  const contentElements = document.querySelectorAll('.prose');
  contentElements.forEach(content => {
    content.innerHTML = content.innerHTML.replace(/#\[\[([^\]]+)\]\]/g, '<a href="#" class="tag">$1</a>');
    content.innerHTML = content.innerHTML.replace(/#(\w+)/g, '<a href="#" class="tag">$1</a>');
  });
};

const ThoughtsPage: React.FC<Props> = ({ thoughts }) => {
  useEffect(() => {
    processTags();
  }, [thoughts])

  return (
    <div className="flex flex-col space-y-3 md:space-y-6">
      <ContainerTitle title={"Thoughts"} />
      <p>
        A log of my thoughts, sorted by date.
      </p>
      <main
        className="w-full max-w-4xl space-y-2 md:space-y-4"
      >
        {thoughts.map((thought, index) => (
          <div
            key={index}
            className="p-4 md:p-5 bg-slate rounded-lg shadow-md space-y-2"
          >
            <h2 className="text-sm opacity-70">
              {moment(thought.date, "YYYY-MM-DD").format("MMM D, YYYY")}
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

        // Ensure month and day are always two digits
        const paddedMonth = month.padStart(2, '0');
        const paddedDay = day.split('-')[0].padStart(2, '0');

        thoughts.push({
          date: `${year}-${paddedMonth}-${paddedDay}`,
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
