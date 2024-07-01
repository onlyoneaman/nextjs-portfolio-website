import {Button} from "@/components/ui/button";
import Link from "next/link";

const GetInTouchButton = () => {

  return(
    <Link
      className="text-white hover:text-oldsilver"
      href={'/contact'}
    >
      <Button>
        Get in Touch
      </Button>
    </Link>
  )
};

export default GetInTouchButton;
