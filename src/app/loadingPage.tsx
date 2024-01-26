import carregamento from '@/assets/Lottie/carregamento.json'
import Lottie from 'lottie-react'

export default function LoadingPage() {
  return (
    <div className="relative min-h-screen min-w-full bg-transparent text-center">
      <h2 className="mt-60">
        <Lottie
          className="m-auto flex w-40 "
          animationData={carregamento}
          width={40}
          loop={true}
        />
      </h2>
      <div className="blur "></div>
    </div>
  )
}
