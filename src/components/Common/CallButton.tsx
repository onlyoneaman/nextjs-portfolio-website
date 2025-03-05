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
      cal("ui");
    })();
  }, []);

  return (
    <button
      className='bg-white text-black px-3 py-1 rounded-lg shadow-md hover:bg-gray-200 hover:text-gray-900'
      data-cal-link='amankumarai/15min'
    >
      15 minutes call
    </button>
  )
};

export default CallButton;
