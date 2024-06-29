import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useRouter} from "next/router";

const AvatarBox = () => {
  const router = useRouter();

  const returnToHome = () => {
    router.push('/')
  }

  return (
    <div
      className="flex items-center justify-start space-x-3 mb-8 px-2"
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          alt="User Image"
          src={"/images/user.jpg"}
        />
        <AvatarFallback>
          CN
        </AvatarFallback>
      </Avatar>
      <div
        className="text-sm flex flex-col tracking-wide space-y-1"
      >
        <span className="text-white">
          Aman Kumar
        </span>
        <span>
          AI Engineer
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
