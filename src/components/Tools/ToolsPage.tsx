import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import ToolCard from "@/components/Tools/ToolCard.tsx";
import toolsData from "@/data/toolsData.ts";

const ToolsPage = () => {

  return (
    <div className="mx-auto max-w-4xl space-y-5">

      <ContainerTitle
        title="Shovels"
      />
      <h3
        className="text-sm"
      >
        Tools I frequently use to make life easier
      </h3>

      <div
        className="text-sm grid grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-1"
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
