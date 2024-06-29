import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import ToolCard from "@/components/Tools/ToolCard.tsx";
import toolsData from "@/components/Tools/toolsData";

const ToolsPage = () => {

  return (
    <div className="w-[80%] mx-auto">
      <div
        className="space-y-5"
      >
        <ContainerTitle
          title="Shovels"
        />
        <h3
          className="text-sm"
        >
          Tools I frequently use to make life easier
        </h3>

        <div
          className="text-sm space-y-2 text-gray-500"
        >
          {
            toolsData.map((tool) => {
              return (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                />
              )
            })
          }
          <p>
            I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be automated and workflows are going to
            completely revolutionize from what we see today. I want to be at the forefront of this change.
          </p>
        </div>

      </div>
    </div>
  )
};

export default ToolsPage;
