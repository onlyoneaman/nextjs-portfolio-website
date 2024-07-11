import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  isMobile: boolean;
};

const Container = (
  {
    children,
    isMobile
  }: ContainerProps
) => {
  return (
    <div
      className={`
        grow p-4 sm:p-6 md:p-9 md:px-12 md:py-32 mx-4 sm:mx-12 lg:mx-24
        ${isMobile ? 'pt-6' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
