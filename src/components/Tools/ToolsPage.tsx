import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import ToolCard from "@/components/Tools/ToolCard.tsx";
import toolsData from "@/data/toolsData.ts";

const ToolsPage = () => {

  return (
    <div className="mx-auto max-w-4xl space-y-3 md:space-y-5">

      <ContainerTitle
        title="Shovels"
      />
      <h3
        className="text-sm"
      >
        Tools I frequently use to make life easier
      </h3>

      <div
        className="text-sm grid grid-cols-2 gap-2 md:gap-4"
      >
        {
          toolsData.map((tool) => {
            return (
              <ToolCard
                key={tool.title}
                tool={tool}
              />
            )
          })
        }
      </div>

    </div>
  )
};

export default ToolsPage;
