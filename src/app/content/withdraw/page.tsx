'use client'

import { Dropdown } from 'react-dropdown-now'
import CurrencyInput from 'react-currency-masked-input'
import { formatNumberUSD, formatedNumberBRL } from '@/utils/currencyParse'
import { useWithdraw } from '@/hooks/useWithdraw'
import { Button } from '@/components/Button'
import 'react-dropdown-now/style.css'

export default function Withdraw() {
  const { cards, cotacao, dataUser, setId } = useWithdraw()

  return (
    <div className="flex text-slate-100	">
      <div className="h-98 flex w-full gap-6 p-3 ">
        <div>
          <p className="mb-2 font-bold">Retirar</p>
          <div className="flex w-44 flex-col rounded bg-slate-800 p-2">
            <p className="mb-3 flex w-36 justify-center">Saldo disponivel</p>
            <span className="text-xs">
              {formatNumberUSD(dataUser.totalBalance)}
            </span>
            <span className="text-xs">
              {formatedNumberBRL(Number(dataUser.totalBalance) * cotacao)}
            </span>
            <span className="mb-3 mt-3">Metodo de Retirada</span>

            <div className="text-xs">
              <Dropdown
                options={cards}
                onChange={({ value }) => setId(value as string | number)}
              />
            </div>
          </div>
        </div>
        <div className=" h-full w-1/2 ">
          <div className="mt-8 rounded bg-slate-800 p-2">
            <span>Valor da retirada</span>
            <div>
              <CurrencyInput
                onChange={(e: any) => console.log(e.target.value)}
                type="text"
                className="mb-4 mt-2 w-full appearance-none rounded bg-slate-700 p-1.5 text-xs text-slate-300 outline-none"
              />
              <span>Senha de pagamento</span>
              <input
                type="password"
                className="mb-4 mt-2 w-full appearance-none rounded bg-slate-700 p-1.5 text-xs text-slate-300 outline-none"
              />
            </div>
            <div className="text-xs">
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Taxa de manuseio</p>
                <p>0.00 USD</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Taxa de conversao</p>
                <p>1 USD = 0.000022 USD</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>A receber</p>
                <p>0 USD</p>
              </span>
            </div>
            <Button sizes="withdraw">Retirar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
