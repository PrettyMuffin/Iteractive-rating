import { useLocation } from "react-router-dom";

import imgSuccess from "../assets/illustration-thank-you.svg";

const Success = () => {
  const location = useLocation();

  const rating = location.state as number;

  return (
    <div className="flex flex-col gap-6 justify-center items-center px-5 py-7 mx-7 max-w-sm bg-gradient-to-b rounded-lg from-neutral-darkBlue-400 to-neutral-darkBlue-endGradient">
      <img className="max-w-full w-fit" src={imgSuccess} alt="" />
      <div className="flex justify-center items-center px-2 py-1 bg-opacity-25 rounded-full text-primary bg-neutral-grey-500">
        <p className="translate-y-[10%] text-center">
          You selected {rating} out of 5
        </p>
      </div>
      <h1 className="text-4xl font-bold">Thank you!</h1>
      <p className="text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
export default Success;
