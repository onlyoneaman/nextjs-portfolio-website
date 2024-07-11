import Link from "next/link";
import {useRouter} from "next/router";
import {RouteLink} from "@/types";
import routeLinks from "@/data/routeLinks.tsx";

const RouteButtons = () => {
  const router = useRouter();
  const links: RouteLink[] = routeLinks;

  const activeLink = router.pathname;

  return (
    <div
      className="space-y-1 py-3"
    >
      {
        links.map((link, index) => {
          let active = activeLink.includes(link.path);
          if (link.path == "/" && activeLink !== "/") {
            active = false;
          }
          return (
            <Link
              className={
                `flex items-center border justify-start gap-2 cursor-pointer px-3 py-2 hover:text-white rounded-md text-sm ` +
                (active ? "border-[#393939] bg-charleston text-white " : "border-transparent")
              }
              key={index}
              href={link.path}
            >
              <span key={"icon"}>
                {link.icon}
              </span>
              <span key={"name"}>
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
