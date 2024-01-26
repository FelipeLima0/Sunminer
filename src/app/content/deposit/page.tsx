'use client'

import { formatNumberUSD, formatedNumberBRL } from '@/utils/currencyParse'
import { useDeposit } from '@/hooks/useDeposit'
import { Button } from '@/components/Button'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export default function Deposit() {
  const {
    cotacao,
    dataUser,
    typesDeposit,
    selectId,
    register,
    handleButtonClick,
    handleSubmit,
    deposit,
    isValid,
  } = useDeposit()

  return (
    <div className="flex w-full text-white">
      <div className="h-98 flex w-11/12 gap-6 p-3">
        <ToastContainer />
        <div>
          <p className="mb-2 font-bold">Depositar</p>
          <div className="flex w-44 flex-col rounded bg-slate-800 p-2">
            <p className="mb-3 flex w-36 justify-center">Saldo disponivel</p>
            <span className="text-xs">
              {formatNumberUSD(dataUser.totalBalance)}
            </span>
            <span className="text-xs">
              {formatedNumberBRL(Number(dataUser?.totalBalance) * cotacao)}
            </span>
            <span className="mb-3 mt-3">Metodo de Deposito</span>
            <div className="flex flex-col gap-1 text-xs">
              {typesDeposit.map((item) => (
                <button
                  key={item.value}
                  className={`flex h-8 rounded border ${
                    selectId === Number(item.value)
                      ? 'bg-slate-950 text-white'
                      : 'border-slate-600'
                  } p-2 duration-200 hover:bg-slate-950`}
                  onClick={() => handleButtonClick(item.value)}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className=" h-full w-6/12 ">
          <div className="mt-8 rounded bg-slate-800 p-2">
            <span>Valor do deposito</span>
            <div>
              <input
                type="text"
                className="mb-4 mt-2 w-full appearance-none rounded bg-slate-700 p-1.5 text-xs text-slate-300 outline-none"
                {...register('amount')}
              />
            </div>
            <div className="text-xs">
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Limite</p>
                <p>100.00 USD - 1000000.00 USD</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Taxa de manuseio</p>
                <p>0.00%</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>A pagar</p>
                <p>0 USD</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Taxa de conversao</p>
                <p>1 USD = 1.000000 USD</p>
              </span>
              <span className="mb-2.5 flex justify-between rounded border-b-2 border-slate-500">
                <p>Valor a pagar</p>
                <p>0 USD</p>
              </span>
            </div>
            <Button
              onClick={handleSubmit(deposit)}
              disabled={!isValid}
              sizes="deposit"
            >
              Depositar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
