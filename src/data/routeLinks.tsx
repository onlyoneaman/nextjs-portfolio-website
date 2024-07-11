import {RouteLink} from "@/types";
import {IoHomeOutline, IoMailOutline, IoNavigate, IoPencilOutline} from "react-icons/io5";
import {MdOutlineMapsHomeWork} from "react-icons/md";
import {FaRegUserCircle} from "react-icons/fa";
import {FiTool} from "react-icons/fi";
import {IoIosCloudOutline} from "react-icons/io";

const links: RouteLink[] = [
  {
    path: "/",
    name: "Home",
    icon: <IoHomeOutline/>
  },
  {
    path: "/experience",
    name: "Experience",
    icon: <MdOutlineMapsHomeWork/>
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <IoNavigate/>
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <IoPencilOutline/>
  },
  {
    path: "/about",
    name: "About",
    icon: <FaRegUserCircle/>
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <IoMailOutline/>
  },
  {
    path: "/tools",
    name: "Tools",
    icon: <FiTool/>
  },
  {
    path: "/thoughts",
    name: "Thoughts",
    icon: <IoIosCloudOutline />
  }
];

export default links;
