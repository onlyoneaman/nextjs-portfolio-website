import {
  FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter
} from 'react-icons/fa'

const SocialButtons = () => {

  const socialLinks = [
    {
      icon: <FaTwitter/>,
      title: "Twitter",
      link: "https://twitter.com/onlyoneaman"
    },
    {
      icon: <FaGithub/>,
      title: "Github",
      link: "https://github.com/onlyoneaman"
    },
    {
      icon: <FaInstagram/>,
      title: "Instagram",
      link: "https://instagram.com/_a_gryffindor"
    },
    {
      icon: <FaMedium/>,
      title: "Medium",
      link: "https://onlyoneaman.medium.com"
    },
    {
      icon: <FaLinkedin/>,
      title: "LinkedIn",
      link: "https://linkedin.com/in/onlyoneaman"
    }
  ]

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
                  `flex items-center justify-start gap-2 cursor-pointer py-1.5 hover:text-white rounded-md text-sm ` +
                  `text-gray-400 `
                }
                href={socialLink.link}
                key={index}
                target={"_blank"}
              >
              <span>
                {socialLink.icon}
              </span>
                <span>
                {socialLink.title}
              </span>
              </a>
            )
          })
        }
      </div>
    </div>
  );
};

export default SocialButtons;
