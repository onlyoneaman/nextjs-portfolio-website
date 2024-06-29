import Link from "next/link";
import {useRouter} from "next/router";
import {IoHomeOutline, IoMailOutline, IoPencilOutline} from "react-icons/io5";
import {FaRegUserCircle} from "react-icons/fa";

const RouteButtons = () => {
  const router = useRouter();
  const links = [
    {
      path: "/",
      name: "Home",
      icon: <IoHomeOutline />
    },
    {
      path: "/blogs",
      name: "Blogs",
      icon: <IoPencilOutline />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaRegUserCircle />
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <IoMailOutline />
    },
  ]

  const activeLink = router.pathname;

  return (
    <div
      className="space-y-1"
    >
      {
        links.map((link, index) => {
          let active = activeLink.includes(link.path);
          if(link.path == "/" && activeLink !== "/") {
            active = false;
          }
          return (
            <Link
              className={
                `flex items-center justify-start gap-2 cursor-pointer px-3 py-2 hover:text-white rounded-md text-sm ` +
                (active ? " bg-charleston text-white " : "")
              }
              key={index}
              href={link.path}
            >
              <span>
                {link.icon}
              </span>
              <span>
                {link.name}
              </span>
            </Link>
          )
        })
      }
    </div>
  )
};

export default RouteButtons;
