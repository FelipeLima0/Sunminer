"use client";

import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

import CurrencyInput from "react-currency-masked-input";
import { formatNumberUSD, formatedNumberBRL } from "@/utils/currencyParse";
import { useWithdraw } from "../../../hook/useWithdraw";

export default function Withdraw() {
  const { cards, cotacao, dataUser, setId } = useWithdraw();

  return (
    <div className="flex text-slate-100	">
      <div className="flex w-full h-98 p-3 gap-6 ">
        <div>
          <p className="font-bold mb-2">Retirar</p>
          <div className="flex flex-col w-44 p-2 bg-slate-800 rounded">
            <p className="flex justify-center w-36 mb-3">Saldo disponivel</p>
            <span className="text-xs">
              {formatNumberUSD(dataUser?.totalBalance!)}
            </span>
            <span className="text-xs">
              {formatedNumberBRL(Number(dataUser?.totalBalance!) * cotacao!)}
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
        <div className=" w-1/2 h-full ">
          <div className="mt-8 p-2 bg-slate-800 rounded">
            <span>Valor da retirada</span>
            <div>
              <CurrencyInput
                onChange={(e: any) => console.log(e.target.value)}
                type="text"
                className="w-full mb-4 mt-2 bg-slate-700 rounded outline-none p-1.5 appearance-none text-slate-300 text-xs"
              />
              <span>Senha de pagamento</span>
              <input
                type="password"
                className="w-full mb-4 mt-2 bg-slate-700 rounded outline-none p-1.5 appearance-none text-slate-300 text-xs"
              />
            </div>
            <div className="text-xs">
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Taxa de manuseio</p>
                <p>0.00 USD</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Taxa de conversao</p>
                <p>1 USD = 0.000022 USD</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>A receber</p>
                <p>0 USD</p>
              </span>
            </div>
            <button className="flex m-auto justify-center bg-green-600 w-60 rounded hover:bg-green-800 duration-300">
              Retirar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
