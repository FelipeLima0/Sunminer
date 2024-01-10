"use client";
import { Suspense } from "react";
import { formatNumberUSD, formatedNumberBRL } from "@/utils/currencyParse";

//ICONS
import { IoWallet } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { useDashboard } from "../../../hook/useDashboard";
import Loading from "@/app/loading";
import { SiAdminer } from "react-icons/si";

export default function Dashboard() {
  const { cotacao, dataUser, statisticDetails } = useDashboard();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex w-full text-white">
        <div className=" ml-20 mt-4 gap-4 grid grid-cols-2 ">
          <div className="p-2 w-40 h-20 rounded bg-slate-800 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Saldo Disponivel</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.totalBalance!)}</p>
                <p>
                  {formatedNumberBRL(Number(dataUser?.totalBalance) * cotacao!)}
                </p>
              </span>
              <span className="mt-2.5">
                <IoWallet size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Maquinas Ativas</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{statisticDetails?.activeMachines}</p>
              </span>
              <span className="mt-2.5">
                <SiAdminer size={28} className="ml-2" />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Comissão Total</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.commissionBalance!)}</p>
                <p>
                  {formatedNumberBRL(Number(dataUser?.totalBalance) * cotacao!)}
                </p>
              </span>
              <span className="mt-2.5">
                <IoWallet size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800  hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Ganho de Ontem</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.yesterday_earnings!)}</p>
                <p>
                  {formatedNumberBRL(dataUser?.yesterday_earnings! * cotacao!)}
                </p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800	 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Ganho de Hoje</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.today_earnings!)}</p>
                <p>{formatedNumberBRL(dataUser?.today_earnings! * cotacao!)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800	 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Ganho da Semana</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.week_earnings!)}</p>
                <p>{formatedNumberBRL(dataUser?.week_earnings! * cotacao!)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800	 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Ganho do Mês</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.month_earnings!)}</p>
                <p>{formatedNumberBRL(dataUser?.month_earnings! * cotacao!)}</p>
              </span>
              <span className="mt-2.5">
                <AiFillDollarCircle size={28} />
              </span>
            </ul>
          </div>

          <div className="p-2 w-40 h-20 rounded bg-slate-800	 hover:bg-slate-950	duration-300">
            <p className="text-xs mb-2">Ganho do Mes passado</p>
            <ul className="flex justify-between	">
              <span className="flex flex-col text-xs gap-1.5 mb-2">
                <p>{formatNumberUSD(dataUser?.last_month_earnings!)}</p>
                <p>
                  {formatedNumberBRL(dataUser?.last_month_earnings! * cotacao!)}
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
  );
}
