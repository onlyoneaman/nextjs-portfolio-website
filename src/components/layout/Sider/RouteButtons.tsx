import Link from "next/link";
import { useRouter } from "next/router";
import { RouteLink } from "@/types";
import routeLinks from "@/data/routeLinks.tsx";
import {sendEvent} from "@/scripts/GoogleAnalytics.tsx";

const RouteButtons = ({ isMobile = false }) => {
  const router = useRouter();
  const links: RouteLink[] = routeLinks;
  const activeLink = router.pathname;

  return (
    <div className={isMobile ? "flex space-x-4" : "space-y-1 py-3"}>
      {links.map((link, index) => {
        let active = activeLink.includes(link.path);
        if (link.path === "/" && activeLink !== "/") {
          active = false;
        }
        return (
          <Link
            className={`
              flex items-center cursor-pointer rounded-md text-sm
              ${isMobile
              ? "flex-col p-2 min-w-[60px] justify-center"
              : "border px-3 py-2 gap-2 justify-start " +
              "dark:hover:text-white hover:text-black hover:bg-gray-200 dark:hover:bg-transparent "
            }
              ${active
              ? "dark:bg-charleston dark:text-white dark:border-[#393939] bg-primary text-white border-primary"
              : isMobile
                ? ""
                : "border-transparent"
            }
            `}
            key={index}
            href={link.path}
            onClick={() => {
              sendEvent({
                action: "click",
                category: "navigation",
                label: link.name,
                value: link.path,
              });
            }}
          >
            <span key="icon">{link.icon}</span>
            <span
              key="name"
              className={`
                ${isMobile ? "text-xs pt-1" : ""}
              `}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default RouteButtons;
