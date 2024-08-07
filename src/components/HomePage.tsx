import {Typewriter} from 'react-simple-typewriter';
import ContactButton from "@/components/Common/ContactButton.tsx";
import EmailButton from "@/components/Common/EmailButton.tsx";
import ContainerTitle from "@/components/Common/ContainerTitle.tsx";

const HomePage = () => {

  return (
    <div
      className="sm:w-[80%] mx-auto space-y-8"
    >
      <div className="space-y-3">
        <ContainerTitle
          title="Hey, I'm Aman"
        />
        <h2
          className="text-3xl md:text-5xl font-medium text-white"
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
        <p>
          Hard-Working, Ambitious, and a Fast Learner. I am a Full-Stack Developer and AI Enthusiast.
        </p>
        <p className="space-x-1">
          <span>
            Currently I am working as a Founding Engineer at
          </span>
          <a className="underline" href={"https://kay.ai"} target={"_blank"}>Kay.ai</a>
          <span>
            building workflow automation for insurance brokers.
          </span>
          <br/>
        </p>

        <p>
          I have built multiple products in past 5 years.
          Raised $100K funding for my startup Dreamboat.ai, built Engagebud, Influencerbit.
        </p>

        <p>
          I help starups and businesses built their web applications and apps. As a Full Stack Developer, I can build
          you product from scratch or help you with your existing product.
          <br/>
          Reachout to me if this is something you are looking for.
        </p>

        <p>
          You can talk to me about AI, new ideas, life, or anything else.
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
