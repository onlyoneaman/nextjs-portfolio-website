import {CommonButtonProps} from "@/types";

const getStyles = (variant: CommonButtonProps["variant"]) => {
  if (variant === 'primary') {
    return 'bg-primary text-white'
  } else {
    return "hover:bg-slate hover:text-white bg-oldsilver text-black"
  }
};

export {
  getStyles
}
