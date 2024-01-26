import loadingCircle from '@/assets/Lottie/loadingSpinner.json'
import Lottie from 'lottie-react'

const Loading = () => {
  return (
    <button
      disabled
      className="m-auto mt-10 h-10 w-24  rounded-xl bg-emerald-400 font-bold text-black "
    >
      <Lottie
        className="m-auto flex w-16 "
        animationData={loadingCircle}
        width={18}
        loop={true}
      />
    </button>
  )
}
export default Loading
