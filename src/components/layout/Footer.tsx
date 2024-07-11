import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-md sm:text-lg text-white font-light w-20">
      {currentTime}
    </div>
  );
};

type FooterProps = {
  isMobile: boolean;
};

const Footer = (
  {isMobile}: FooterProps
) => {

  return (
    <footer className={`flex self-end min-w-full grow p-3 sm:p-5 flex-col border-t-[0.5px] 
    text-gray-500 border-gray-700 space-x-3 gap-2 text-xs sm:text-sm
    max-w-xl md:max-w-4xl mx-auto
    ${isMobile ? "mb-20" : ""}
    `}>
      <div className="flex justify-between items-center border-t border-gray-800 pt-4">
        <div className="flex items-center">
          {/*<span className="text-blue-400 mr-2">Currently</span>*/}
          <Link
            className="text-gray-400 hover:text-gray-200 hover:underline transition-colors duration-300 ease-in-out"
            href={"/contact"}
          >
            Reach out →
          </Link>
        </div>

        <div className="space-x-1">
          <span className="hidden sm:inline-block">
            Made by Aman |
          </span>
          <span>
            2024 amankumar.ai
          </span>
        </div>

        <LiveTime />
      </div>
    </footer>
  );
};

export default Footer;
