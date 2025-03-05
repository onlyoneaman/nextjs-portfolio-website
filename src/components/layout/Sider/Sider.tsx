import SocialButtons from "@/components/layout/Sider/SocialButtons";
import RouteButtons from "@/components/layout/Sider/RouteButtons";
import AvatarBox from "@/components/layout/Sider/AvatarBox";

type SiderProps = {
  isMobile?: boolean;
};

const Sider = ({isMobile = false}: SiderProps) => {
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-secondary dark:bg-slate overflow-x-auto">
        <div className="overflow-x-auto">
          <div className="flex whitespace-nowrap p-2">
            <RouteButtons isMobile={true} />
            <div className="mx-2 border-l border-gray-600"></div>
            <SocialButtons isMobile={true} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-60 px-4 py-12 space-y-4 overflow-y-auto bg-secondary dark:bg-slate">
      <AvatarBox/>
      <RouteButtons/>
      <SocialButtons/>
    </div>
  );
};

export default Sider;
