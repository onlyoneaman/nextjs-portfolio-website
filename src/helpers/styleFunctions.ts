import {CommonButtonProps} from "@/types";

const getStyles = (variant: CommonButtonProps["variant"]) => {
  if (variant === 'primary') {
    return 'text-black bg-white dark:bg-primary dark:text-white hover:text-gray-500 hover:bg-slate'
  } else {
    return "text-white dark:text-black bg-black dark:bg-oldsilver hover:text-black hover:bg-white dark:hover:bg-slate dark:hover:text-white"
  }
};

export {
  getStyles
}
