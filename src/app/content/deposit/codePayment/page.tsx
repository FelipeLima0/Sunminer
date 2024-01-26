'use client'
import { useDeposit } from '@/hooks/useDeposit'

export default function Payment() {
  const { codePayment } = useDeposit()
  console.log(codePayment)
  return (
    <div className="m-auto ml-10 flex min-h-80 w-7/12 justify-center border-2">
      <div>
        <span className=" text-white">
          Voce solicitou o deposito de $100 = R$500
        </span>
      </div>
    </div>
  )
}
