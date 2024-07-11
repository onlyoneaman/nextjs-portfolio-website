
const Container = ({children}: any) => {

  return (
    <div
      className="grow p-6 sm:p-9 md:px-12 md:py-32 mx-6 md:mx-24"
    >
      {children}
    </div>
  );
};

export default Container;
