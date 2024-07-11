import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useRouter} from "next/router";
import {Typewriter} from "react-simple-typewriter";

const AvatarBox = () => {
  const router = useRouter();

  const returnToHome = () => {
    router.push('/')
  }

  return (
    <div
      className="flex items-center justify-start space-x-3 mb-4 sm:mb-8 px-2"
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          className="h-12 w-12 rounded-full object-cover"
          alt="User Image"
          src={"/images/user.jpg"}
        />
        <AvatarFallback>
          CN
        </AvatarFallback>
      </Avatar>
      <div
        className="text-sm flex flex-col"
      >
        <span className="text-white">
          Aman Kumar
        </span>
        <span>
          <Typewriter
            words={[
              "AI Engineer",
              "Problem Solver",
              "FullStack Dev"
            ]}
            cursor
          />
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
