import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";

const ContactButton = () => {


  return (
    <Link
      className="text-white hover:text-oldsilver"
      href={'/contact'}
    >
      <Button>
        Contact
      </Button>
    </Link>
  )
};

export default ContactButton;
