const ToolCard = ({tool}: { tool: { title: string, tag: string, image: string } }) => {
  return (
    <div
      className="flex flex-row items-center space-y-2"
    >
      <img
        className="w-12 h-12 rounded-full"
        src={"/images/tools/" + tool.image}
        alt={tool.title}
      />
      <div>
        <h1>{tool.title}</h1>
        <p>{tool.tag}</p>
      </div>
    </div>
  );
};

export default ToolCard;
