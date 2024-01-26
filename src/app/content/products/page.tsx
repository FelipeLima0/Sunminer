'use client'

import { Button } from '@/components/Button'
import { useProduct } from '@/hooks/useProducts'
import { formatNumberUSD, formatedNumberBRL } from '@/utils/currencyParse'

export default function ListProducts() {
  const { products, cotacao, handleProduct } = useProduct()

  return (
    <div className="w-8/12">
      {products?.map((item) => (
        <div
          key={item.id}
          className="m-auto mt-7 flex min-h-40 rounded-lg border-slate-950 bg-slate-800 p-1 pb-4"
        >
          <div className="ml-6 w-11/12">
            <h2 className="  ml-7 text-white">{item.title}</h2>

            <div className="m-auto mt-5 flex text-center text-xs text-white ">
              <span className="w-96">
                <p className="mb-3">Preco do contrato</p>
                <p>{formatNumberUSD(item.amount)}</p>
                <p>{formatedNumberBRL(Number(item.amount) * cotacao)}</p>
              </span>
              <span className="w-96">
                <p className="mb-3">Renda fixa</p>
                <p>
                  {formatNumberUSD(item.amount)} +{' '}
                  {formatNumberUSD(item.daily_profit)}
                </p>
              </span>
              <span className="w-96">
                <p className="mb-3">Tempo de contrato</p>
                <p>{item.cycle} Dias</p>
              </span>
              <span className="w-96">
                <p className="mb-3">Lucro diario</p>
                <p>{formatNumberUSD(item.daily_profit)}</p>
                <p>{formatedNumberBRL(item.daily_profit * cotacao)}</p>
              </span>
              <span className="w-96">
                <p className="mb-3">Lucro total</p>
                <p>{formatNumberUSD(item.cycle * item.daily_profit)}</p>
                <p>
                  {formatedNumberBRL(item.cycle * item.daily_profit * cotacao)}
                </p>
              </span>
            </div>
            <Button onClick={() => handleProduct(item.id)} sizes="products">
              Contratar
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
