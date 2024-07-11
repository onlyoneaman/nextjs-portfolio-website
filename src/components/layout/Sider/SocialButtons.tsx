import {
  FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter
} from 'react-icons/fa'
import {GoLinkExternal} from "react-icons/go";
import socialLinks from "@/data/socialLinks.tsx";

const SocialButtons = () => {

  const links = socialLinks;

  return (
    <div
      className="space-x-2 space-y-3 py-5"
    >
      <span
        className="text-sm"
      >
        Connect
      </span>
      <div className="space-y-1">
        {
          socialLinks.map((socialLink, index) => {
            return (
              <a
                className={
                  `flex items-center justify-between gap-2 cursor-pointer py-1.5 hover:text-white rounded-md text-sm`
                }
                href={socialLink.link}
                key={index}
                target={"_blank"}
              >
                <div className={"flex items-center justify-center gap-2"}>
                  <span>
                    {socialLink.icon}
                  </span>
                    <span>
                    {socialLink.title}
                  </span>
                </div>
                <GoLinkExternal />
              </a>
            )
          })
        }
      </div>
    </div>
  );
};

export default SocialButtons;
