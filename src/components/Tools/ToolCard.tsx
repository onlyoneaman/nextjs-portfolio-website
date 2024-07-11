import {Tool} from "@/types";

type ToolCardProps = {
  tool: Tool
}

const ToolCard = ({tool}: ToolCardProps) => {

  const openLink = () => {
    window.open(tool.link, "_blank");
  }

  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-start space-y-2 p-3 rounded-md gap-3
      border-transparent hover:border-white hover:bg-charleston"
      onClick={() => openLink()}
    >
      <img
        className="w-12 h-12 rounded-md object-cover"
        src={"/images/tools/" + tool.image}
        alt={tool.title}
      />
      <div>
        <h1 className="text-lg">
          {tool.title}
        </h1>
        <p className="text-sm">
          {tool.tag}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;
