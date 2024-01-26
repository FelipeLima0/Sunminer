'use client'
import { Button } from '@/components/Button'
import { useBuyProduct } from '@/hooks/useBuyProduct'
import { ProductDetails } from '@/interface/productDetails'
import { formatNumberUSD, formatedNumberBRL } from '@/utils/currencyParse'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

interface Props {
  params: {
    id: number
  }
}

export default function ProductDetails({ params }: Props) {
  const {
    cotacao,
    handleBuyProduct,
    productDetails,
    userData,
    handleSubmit,
    register,
    isValid,
  } = useBuyProduct({ id: params.id })

  return (
    <div className="ml-5 mt-8 flex w-8/12 flex-col items-center gap-5 rounded bg-slate-800 p-3 text-sm text-white">
      <ToastContainer />
      <div>{productDetails.title}</div>
      <span className="flex w-96 justify-between border-b-2 border-slate-700">
        <p>Seu saldo</p>
        <span>
          <p>{formatNumberUSD(Number(userData.balance))}</p>
          <p className="text-xs">
            {formatedNumberBRL(Number(userData.balance) * cotacao)}
          </p>
        </span>
      </span>
      <span className="flex w-96 justify-between border-b-2 border-slate-700">
        <p>Preco do Contrato</p>
        <span>
          <p>{formatNumberUSD(Number(productDetails.contractValue))}</p>
          <p>
            {formatedNumberBRL(Number(productDetails.contractValue) * cotacao)}
          </p>
        </span>
      </span>
      <input
        type="password"
        className="h-7 w-96 rounded-sm border-none bg-slate-600 p-1 outline-none"
        {...register('password')}
      />
      <div className="flex flex-col gap-1">
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Tempo de contrato</p>
          <p>{productDetails.contractTime} Dias</p>
        </span>
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Lucro total</p>
          <span>
            <p>
              {formatNumberUSD(
                productDetails.contractTime * productDetails.dailyProfit,
              )}
            </p>
            <p>
              {formatedNumberBRL(
                productDetails.contractTime *
                  productDetails.dailyProfit *
                  cotacao,
              )}
            </p>
          </span>
        </span>
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Renda fixa</p>
          <p>
            {formatNumberUSD(
              productDetails.dailyProfit * productDetails.contractTime +
                Number(productDetails.contractValue),
            )}
          </p>
        </span>
      </div>
      <Button
        disabled={!isValid}
        onClick={handleSubmit(handleBuyProduct)}
        sizes="buyProduct"
      >
        Contratar
      </Button>
    </div>
  )
}
