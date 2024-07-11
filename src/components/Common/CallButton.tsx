import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {CommonButtonProps} from "@/types";
import {getStyles} from "@/helpers/styleFunctions.ts";

const CallButton = (
  {
    variant = 'primary'
  }: CommonButtonProps
) => {

  return (
    <Link
      href={'https://cal.com/amankumarai/15min'}
      target={"_blank"}
    >
      <Button
        className={getStyles(variant)}
      >
        15 minutes call
      </Button>
    </Link>
  )
};

export default CallButton;
