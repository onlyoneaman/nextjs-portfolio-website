import {CommonButtonProps} from "@/types";
import { getCalApi } from "@calcom/embed-react";
import {useEffect} from "react";

const CallButton = (
  {
    variant = 'primary'
  }: CommonButtonProps
) => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {});
    })();
  }, []);

  return (
    <button
      className='
      text-white bg-primary hover:bg-gray-500 hover:text-white
      dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-900
      px-3 py-1 rounded-lg shadow-md
      '
      data-cal-link='amankumarai/15min'
    >
      15 minutes call
    </button>
  )
};

export default CallButton;
