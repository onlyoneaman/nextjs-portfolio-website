import React from 'react';
import Link from 'next/link';
import ThemeToggle from "@/components/layout/ThemeToggle.tsx";
import LiveTime from "@/components/layout/Footer/LiveTime.tsx";

type FooterProps = {
  isMobile: boolean;
};

const Footer = (
  {isMobile}: FooterProps
) => {

  return (
    <footer className={`flex self-end min-w-full grow p-3 sm:p-5 flex-col border-t-[0.5px] 
    text-gray-700 border-gray-700 dark:text-gray-500
    space-x-3 gap-2 text-xs sm:text-sm max-w-xl md:max-w-4xl mx-auto
    ${isMobile ? "mb-20" : ""}
    `}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/*<span className="text-blue-400 mr-2">Currently</span>*/}
          <Link
            className="text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition-colors duration-300 ease-in-out"
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
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <LiveTime />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
