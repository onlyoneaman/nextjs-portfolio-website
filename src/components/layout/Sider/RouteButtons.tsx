import Link from "next/link";
import {useRouter} from "next/router";

const RouteButtons = () => {
  const router = useRouter();
  const links = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/blogs",
      name: "Blogs"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/contact",
      name: "Contact"
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
                `block cursor-pointer py-1.5 px-2 hover:text-white rounded-md text-sm ` +
                (active ? " bg-gray-600 text-white " : "")
              }
              key={index}
              href={link.path}
            >
              {link.name}
            </Link>
          )
        })
      }
    </div>
  )
};

export default RouteButtons;
