
const Container = ({children}: any) => {

  return (
    <div
      className="grow p-4 sm:p-6 md:p-9 md:px-12 md:py-32 mx-4 sm:12 lg:mx-24"
    >
      {children}
    </div>
  );
};

export default Container;
