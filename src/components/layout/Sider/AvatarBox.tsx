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
      className="flex items-center justify-start space-x-3 sm:mb-8 px-2"
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          className="h-10 w-10 rounded-full object-cover"
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
        <span className="text-white md:text-lg">
          Aman Kumar
        </span>
        <span>
          <Typewriter
            words={[
              "AI Engineer",
              "Dev Stallion",
              "Problem Solver",
              "FullStack"
            ]}
            loop
            cursor
          />
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
