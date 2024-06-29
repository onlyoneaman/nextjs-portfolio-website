import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import ToolCard from "@/components/Tools/ToolCard.tsx";
import toolsData from "@/components/Tools/toolsData";

const ToolsPage = () => {

  return (
    <div className="min-w-full space-y-5">

      <ContainerTitle
        title="Shovels"
      />
      <h3
        className="text-sm"
      >
        Tools I frequently use to make life easier
      </h3>

      <div
        className="text-sm text-gray-500 grid grid-cols-2 gap-1"
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
      </div>

    </div>
  )
};

export default ToolsPage;
