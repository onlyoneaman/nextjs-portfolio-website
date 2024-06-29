import SocialButtons from "@/components/Layout/Sider/SocialButtons.tsx";
import RouteButtons from "@/components/Layout/Sider/RouteButtons.tsx";
import AvatarBox from "@/components/Layout/Sider/AvatarBox.tsx";

const Sider = () => {

  return (
    <div
      className="fixed left-0 min-w-[260px] h-screen bg-slate p-6 py-10 overflow-y-auto
      text-gray-500"
    >
      <AvatarBox />

      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
