import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";

const GetInTouchButton = () => {

  return(
    <Link href={'/contact'}>
      <Button>
        Get in Touch
      </Button>
    </Link>
  )
};

export default GetInTouchButton;
