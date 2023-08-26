import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icon-star.svg";

const Card = () => {
  const [currentRate, setCurrentRate] = useState<number | null>(null);
  const navigator = useNavigate();

  const HandleSubmit = () => {
    currentRate && navigator("/success", { state: currentRate });
  };

  return (
    <form
      className="px-5 py-7 mx-7 space-y-6 max-w-md bg-gradient-to-b rounded-lg from-neutral-darkBlue-400 to-neutral-darkBlue-endGradient"
      onSubmit={HandleSubmit}
    >
      <Star />
      <Description />
      <Rating currentRate={currentRate} setCurrentRate={setCurrentRate} />
      <button
        className="py-2 w-full font-bold tracking-widest uppercase align-middle rounded-3xl bg-primary sm:text-lg hover:bg-neutral-white hover:text-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Card;

const Star = () => {
  return (
    <div className="w-[14%]">
      <img
        className="p-4 w-full bg-opacity-25 rounded-full min-w-fit bg-neutral-grey-500"
        src={logo}
        alt=""
      />
    </div>
  );
};

const Description = () => {
  return (
    <section className="">
      <h1 className="mb-2 text-3xl">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </section>
  );
};

type RatingProps = {
  currentRate: number | null;
  setCurrentRate: React.Dispatch<React.SetStateAction<number | null>>;
};

const Rating = ({ currentRate, setCurrentRate }: RatingProps) => {
  const handleRateClick = (rate: number) => {
    setCurrentRate((prevRate) => (prevRate === rate ? null : rate));
  };

  const RatingContainer = ({ text }: { text: number }) => {
    const isActive = currentRate === text;

    return (
      <div
        className={`flex justify-center items-center w-[14%] rounded-full  aspect-square bg-neutral-grey-500 text-neutral-grey-200 cursor-pointer  ${
          isActive
            ? "bg-primary text-white "
            : "bg-opacity-25 hover:bg-opacity-100 hover:text-neutral-white hover:bg-neutral-grey-200"
        }`}
        onClick={() => handleRateClick(text)}
      >
        {text}
      </div>
    );
  };

  return (
    <div className="flex justify-between">
      {Array.from({ length: 5 }, (_, index) => (
        <RatingContainer key={index + 1} text={index + 1} />
      ))}
    </div>
  );
};
