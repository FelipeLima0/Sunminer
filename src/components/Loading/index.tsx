import Lottie from "lottie-react";
import loading from "@/assets/Lottie/loadingSpinner.json";

export const Loading = () => {
    return <Lottie animationData={loading} className="w-16 flex m-auto mt-10 " />;
};