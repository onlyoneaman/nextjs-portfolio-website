import {Typewriter} from 'react-simple-typewriter';
import ContactButton from "@/components/Common/ContactButton.tsx";
import EmailButton from "@/components/Common/EmailButton.tsx";
import ContainerTitle from "@/components/Common/ContainerTitle.tsx";

const HomePage = () => {

  const linkClassname = 'text-primary dark:text-white underline hover:bg-gray-200 hover:text-gray-900 p-1 rounded-lg';

  return (
    <div
      className="sm:w-[80%] mx-auto space-y-8"
    >
      <div className="space-y-3">
        <ContainerTitle
          title="Hey, I'm Aman"
        />
        <h2
          className="text-3xl md:text-5xl font-medium text-primary dark:text-white"
        >
          I love to{" "}
          <span
            className="text-gray-500"
          >
            <Typewriter
              words={['Code', 'Design', 'Build', 'Innovate']}
              loop={true}
              cursor
            />
          </span>
        </h2>
      </div>

      <div
        className="text-md tracking-wider font-light space-y-3 md:space-y-5"
      >
        <p className='space-x-1'>
          <span className='text-primary dark:text-white'>
            Full-Stack and AI Enthusiast.
          </span>
          <span>
            Hard-Working, Ambitious, and a Fast Learner.
          </span>
        </p>
        <div className="space-x-1">
          <span>
            Currently I am working as a Founding Engineer at
          </span>
          <a
            className={linkClassname}
            href={"https://kay.ai"}
            target={"_blank"}
          >
            kay.ai
          </a>
          <span>
            building Operator for Insurance Industry.
          </span>
          <br/>
        </div>

        <div className='space-x-1'>
          <span>
            I have built multiple products in past 5 years.
          </span>
          <a
            className={linkClassname}
            href='https://www.crunchbase.com/organization/engagebud'
            target='_blank'
          >
            Raised $100K funding
          </a>
          <p>
            for my startup
            <a
              className={linkClassname}
              href='https://dreamboat.ai/'
              target='_blank'
            >
              Dreamboat.ai,
            </a>
            built
            <a
              className={linkClassname}
              href='https://engagebud1.webflow.io/'
              target='_blank'
            >
              Engagebud,
            </a>
            <a
              className={linkClassname}
              href='https://influencerbit.com/'
              target='_blank'
            >
              Influencerbit.
            </a>
          </p>
        </div>

        <p className='space-x-1'>
          <span>
            You can talk to me about
          </span>
          <span className='text-white'>
            AI, new ideas, life, or anything else.
          </span>
        </p>
      </div>

      <div
        className="flex items-center gap-3"
      >
        <ContactButton variant={"secondary"}/>

        <EmailButton/>
      </div>
    </div>
  );
}

export default HomePage;
