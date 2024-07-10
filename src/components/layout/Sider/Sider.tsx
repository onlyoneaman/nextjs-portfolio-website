import SocialButtons from "@/components/layout/Sider/SocialButtons.tsx";
import RouteButtons from "@/components/layout/Sider/RouteButtons.tsx";
import AvatarBox from "@/components/layout/Sider/AvatarBox.tsx";

const Sider = () => {

  return (
    <div
      className="
      fixed left-0 top-0 h-screen w-60 px-4 py-6 overflow-y-auto
      bg-slate"
    >
      <AvatarBox />

      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
