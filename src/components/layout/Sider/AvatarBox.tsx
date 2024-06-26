import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useRouter} from "next/router";

const AvatarBox = () => {
  const router = useRouter();

  const returnToHome = () => {
    router.push('/')
  }

  return (
    <div
      className="flex items-center justify-start space-x-2 mb-8"
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          alt="User Image"
          src={"/user.jpg"}
        />
        <AvatarFallback>
          CN
        </AvatarFallback>
      </Avatar>
      <div
        className="text-xs flex flex-col space-y-1"
      >
        <span className="text-white">
          Aman
        </span>
        <span>
          AI Engineer
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
