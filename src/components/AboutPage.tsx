import ContainerTitle from "@/components/Common/ContainerTitle";
import EmailButton from "@/components/Common/EmailButton";
import GetInTouchButton from "@/components/Common/GetInTouchButton";

const AboutPage = () => {

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="space-y-5"
      >
        <ContainerTitle
          title="Aman Kumar"
        />
        <h3
          className="text-sm text-gray-500"
        >
          Full-Stack Dev | AI Engineer | Software | AI | LLMs | Travel | Music | F1
        </h3>

        <img
          src={"/images/about.png"}
          alt="about"
          className="h-auto"
        />

        <div
          className="text-sm sm:text-md space-y-2"
        >
          <p>
            Hello! I am Aman, based out of Bengaluru and I enjoy creating things that make life easier for people.
            I have been playing around with code since 2018. I often write about AI, LLMs, Frontend Dev, React, Backend,
            Rails and DBs.
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
            Earlier, I have built multiple products leading development and design for some of them.
            <br />
            Co-Founded Dreamboat.ai, Engagebud, Influencerbit.
          </p>
          <p>
            I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be automated and workflows are going to
            completely revolutionize from what we see today. I want to be at the forefront of this change.
          </p>
          <p>
            I love music (Techno, House), am deep into F1 and love GoKarting, & chess.
          </p>
        </div>

        <div
          className="flex items-center space-x-3"
        >
          <GetInTouchButton/>

          <EmailButton/>
        </div>
      </div>
    </div>
  )
};

export default AboutPage;
