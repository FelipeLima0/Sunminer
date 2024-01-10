"use client";

import { formatNumberUSD, formatedNumberBRL } from "@/utils/currencyParse";
import CurrencyInput from "react-currency-masked-input";
import { useDeposit } from "../../../hook/useDeposit";
import { useState } from "react";
import { api } from "@/services/api/api";
import { describe } from "node:test";

interface IdProps {
  pay_id: number;
}

export default function Deposit() {
  const { cotacao, dataUser, typesDeposit, setselectId, deposit } =
    useDeposit();

  return (
    <div className="flex text-white">
      <div className="flex w-full h-98 p-3 gap-6 ">
        <div>
          <p className="font-bold mb-2">Depositar</p>
          <div className="flex flex-col w-44 p-2 bg-slate-800 rounded">
            <p className="flex justify-center w-36 mb-3">Saldo disponivel</p>
            <span className="text-xs">
              {formatNumberUSD(dataUser?.totalBalance!)}
            </span>
            <span className="text-xs">
              {formatedNumberBRL(Number(dataUser?.totalBalance!) * cotacao!)}
            </span>
            <span className="mb-3 mt-3">Metodo de Deposito</span>
            <div className="flex flex-col gap-1 text-xs">
              {typesDeposit?.map((item) => (
                <button
                  key={item.value}
                  className="flex p-2 h-8 border border-slate-600 rounded hover:bg-slate-950 duration-200"
                  onClick={() => setselectId(item.value)}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full ">
          <div className="mt-8 p-2 bg-slate-800 rounded">
            <span>Valor do deposito</span>
            <div>
              <CurrencyInput
                type="text"
                required
                className="w-full mb-4 mt-2 bg-slate-700 rounded outline-none p-1.5 appearance-none text-slate-300 text-xs"
                onChange={(e: any) => console.log(e.target.value)}
              />
            </div>
            <div className="text-xs">
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Limite</p>
                <p>100.00 USD - 1000000.00 USD</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Taxa de manuseio</p>
                <p>0.00%</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>A pagar</p>
                <p>0 USD</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Taxa de conversao</p>
                <p>1 USD = 1.000000 USD</p>
              </span>
              <span className="flex justify-between mb-2.5 border-slate-500 rounded border-b-2">
                <p>Valor a pagar</p>
                <p>0 USD</p>
              </span>
            </div>
            <button
              onClick={deposit}
              className="flex m-auto justify-center bg-green-600 w-full rounded hover:bg-green-800 duration-300"
            >
              Depositar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
