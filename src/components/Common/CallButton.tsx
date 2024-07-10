import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";

const CallButton = () => {

  return (
    <Link
      className="text-white hover:text-oldsilver"
      href={'https://cal.com/amankumarai/15min'}
      target={"_blank"}
    >
      <Button>
        15 minutes call
      </Button>
    </Link>
  )
};

export default CallButton;
