import Lottie from "lottie-react";
import loadingCircle from "../../assets/Lottie/loadingSpinner.json";

const Loading = () => {
  return (
    <button
      disabled
      className="m-auto mt-10 w-24 h-10  bg-emerald-400 text-black font-bold rounded-xl "
    >
      <Lottie
        className="flex m-auto w-16 "
        animationData={loadingCircle}
        width={18}
        loop={true}
      />
    </button>
  );
};

export default Loading;
