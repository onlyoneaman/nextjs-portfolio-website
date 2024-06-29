type ContainerTitleProps = {
  title: string;
};

const ContainerTitle = ({title}: ContainerTitleProps) => {

  return (
    <h1
      className="text-3xl md:text-5xl font-medium"
    >
      {title}
    </h1>
  )
};

export default ContainerTitle;
