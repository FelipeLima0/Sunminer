"use client";

import { useProduct } from "../../../hook/useProducts";
import { formatNumberUSD, formatedNumberBRL } from "@/utils/currencyParse";

export default function ListProducts() {
  const { products, cotacao, handleProduct } = useProduct();

  return (
    <div className="w-8/12">
      {products?.map((item) => (
        <div
          key={item.id}
          className="flex min-h-40 m-auto mt-7 p-1 pb-4 rounded-lg bg-slate-800 border-slate-950"
        >
          <div className="w-11/12 ml-6">
            <h2 className="  text-white ml-7">{item.title}</h2>

            <div className="flex m-auto mt-5 text-center text-xs text-white ">
              <span className="w-96">
                <p className="mb-3">Preco do contrato</p>
                <p>{formatNumberUSD(item.amount)}</p>
                <p>{formatedNumberBRL(Number(item.amount) * cotacao!)}</p>
              </span>
              <span className="w-96">
                <p className="mb-3">Renda fixa</p>
                <p>
                  {formatNumberUSD(item.amount)} +{" "}
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
                <p>{formatedNumberBRL(item.daily_profit * cotacao!)}</p>
              </span>
              <span className="w-96">
                <p className="mb-3">Lucro total</p>
                <p>{formatNumberUSD(item.cycle * item.daily_profit)}</p>
                <p>
                  {formatedNumberBRL(item.cycle * item.daily_profit * cotacao!)}
                </p>
              </span>
            </div>
            <button
              onClick={() => handleProduct(item.id)}
              className="flex m-auto mt-5 justify-center w-96 rounded-lg font-extrabold bg-emerald-400 hover:bg-emerald-700 duration-300"
            >
              Contratar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
