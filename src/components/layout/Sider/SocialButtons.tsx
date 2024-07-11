import React from 'react';
import socialLinks from "@/data/socialLinks.tsx";
import {GoLinkExternal} from "react-icons/go";

const SocialButtons = ({ isMobile = false }) => {
  return (
    <div className={isMobile ? "flex space-x-4" : "space-x-2 space-y-3 py-5"}>
      {!isMobile && <span className="text-sm">Connect</span>}
      <div className={isMobile ? "flex space-x-4" : "space-y-1"}>
        {socialLinks.map((socialLink, index) => {
          return (
            <a
              className={`
                flex items-center cursor-pointer rounded-md text-sm
                ${isMobile
                ? "flex-col p-2 min-w-[60px] justify-center"
                : "gap-2 py-1.5 hover:text-white justify-between"
              }
              `}
              href={socialLink.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span key="icon">{socialLink.icon}</span>
              <span
                key="title"
                className={`
                  ${isMobile ? "text-xs pt-1" : ""}
                `}
              >
                {socialLink.title}
              </span>
              {!isMobile && <span key="external"><GoLinkExternal /></span>}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialButtons;
