import {Button} from "@/components/ui/button.tsx";
import {FiCopy} from "react-icons/fi";

const EmailButton = () => {

  return (
    <Button
      className={"text-white hover:text-oldsilver"}
    >
      <span
        className="text-sm pr-2"
      >
        <FiCopy
          className="m-0"
          size={12}
        />
      </span>
      <span>
        E-Mail
      </span>
    </Button>
  )
};

export default EmailButton;
