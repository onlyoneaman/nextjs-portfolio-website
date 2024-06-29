const ToolCard = ({ tool }: { tool: {title: string, tag: string, image: string} }) => {
  return (
    <div>
      <h1>{tool.title}</h1>
      <p>{tool.tag}</p>
    </div>
  );
};

export default ToolCard;
