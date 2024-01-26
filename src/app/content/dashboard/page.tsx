'use client'
import React, { Suspense } from 'react'
import { formatNumberUSD, formatedNumberBRL } from '@/utils/currencyParse'

// ICONS
import { useDashboard } from '@/hooks/useDashboard'
import LoadingPage from '@/app/loadingPage'
import { IoWallet } from 'react-icons/io5'
import { AiFillDollarCircle } from 'react-icons/ai'
import { SiAdminer } from 'react-icons/si'

export default function Dashboard() {
  const { cotacao, dataUser, statisticDetails } = useDashboard()

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="flex w-full text-white">
        <div className=" ml-20 mt-4 grid grid-cols-2 gap-4 ">
          <div className="h-20 w-40 rounded bg-slate-800 p-2 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Saldo Disponivel</p>
            <ul className="flex justify-between">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.totalBalance)}</p>
                <p>
                  {formatedNumberBRL(Number(dataUser.totalBalance) * cotacao)}
                </p>
              </span>
              <span className="mt-2.5">
                <IoWallet size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Comissão Total</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.commissionBalance)}</p>
                <p>
                  {formatedNumberBRL(
                    Number(dataUser.commissionBalance) * cotacao,
                  )}
                </p>
              </span>
              <span className="mt-2.5">
                <IoWallet size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Maquinas Ativas</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{statisticDetails?.activeMachines}</p>
              </span>
              <span className="mt-2.5">
                <SiAdminer size={28} className="ml-2" />
              </span>
            </ul>
          </div>
          <div className="h-20 w-40 rounded bg-slate-800 p-2	 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Ganho de Hoje</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.today_earnings)}</p>
                <p>{formatedNumberBRL(dataUser.today_earnings * cotacao)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2  duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Ganho de Ontem</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.yesterday_earnings)}</p>
                <p>
                  {formatedNumberBRL(dataUser.yesterday_earnings * cotacao)}
                </p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2	 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Ganho da Semana</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.week_earnings)}</p>
                <p>{formatedNumberBRL(dataUser.week_earnings * cotacao)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2	 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Ganho do Mês</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.month_earnings)}</p>
                <p>{formatedNumberBRL(dataUser.month_earnings * cotacao)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="h-20 w-40 rounded bg-slate-800 p-2	 duration-300	hover:bg-slate-950">
            <p className="mb-2 text-xs">Ganho do Mes passado</p>
            <ul className="flex justify-between	">
              <span className="mb-2 flex flex-col gap-1.5 text-xs">
                <p>{formatNumberUSD(dataUser.last_month_earnings)}</p>
                <p>
                  {formatedNumberBRL(dataUser.last_month_earnings * cotacao)}
                </p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
