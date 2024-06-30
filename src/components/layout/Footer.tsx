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
    <div className="text-sm text-gray-600 font-light w-20">
      {currentTime}
    </div>
  );
};

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="text-gray-400 hover:text-white mb-1">
          <Link href={`/${item.toLowerCase()}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setCurrentTime(time);
    // update time in 2 seconds

  }, []);

  return (
    <footer className={`flex self-end min-w-full grow p-5 flex-col border-t-[0.5px] 
    text-gray-500 border-gray-700 space-x-3 gap-2 text-sm
    max-w-xl md:max-w-4xl mx-auto
    `}>
      {/*<div className="grid grid-cols-4 gap-8 mb-8 hidden">*/}
      {/*  <FooterSection*/}
      {/*    title="Index"*/}
      {/*    items={["Explore", "Boutique", "Projects", "Services", "About"]}*/}
      {/*  />*/}
      {/*  <FooterSection*/}
      {/*    title="Products"*/}
      {/*    items={["Billify", "Supply", "Linx", "CourseOS"]}*/}
      {/*  />*/}
      {/*  <FooterSection*/}
      {/*    title="Resources"*/}
      {/*    items={["Feed", "Thoughts", "Stack"]}*/}
      {/*  />*/}
      {/*  <FooterSection*/}
      {/*    title="Connect"*/}
      {/*    items={["Contact", "Twitter", "LinkedIn", "YouTube"]}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="flex justify-between items-center border-t border-gray-800 pt-4">
        <div className="flex items-center">
          {/*<span className="text-blue-400 mr-2">Currently</span>*/}
          <Link
            className="text-gray-400"
            href={"/contact"}
          >
            Reach out →
          </Link>
        </div>

        <div>
          Made by Aman | 2024 amankumar.ai
        </div>

        <LiveTime />
      </div>
      {/*<div className="flex justify-around items-center mt-4 text-sm text-gray-400 hidden">*/}
      {/*  <Link href="/buy-template" className="hover:text-white">*/}
      {/*    Buy this template →*/}
      {/*  </Link>*/}
      {/*  <div className="flex space-x-4">*/}
      {/*    <span>Pro Version</span>*/}
      {/*    <span>By Canvas Supply</span>*/}
      {/*    <span>Made in Framer</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
