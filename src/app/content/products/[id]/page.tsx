"use client";
import { useBuyProduct } from "@/hook/useBuyProduct";
import { ProductDetails } from "@/interface/productDetails";
import { formatNumberUSD, formatedNumberBRL } from "@/utils/currencyParse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface Props {
  params: {
    id: number;
  };
}

export default function ProductDetails({ params }: Props) {
  const {
    cotacao,
    handleBuyProduct,
    productDetails,
    userData,
    handleSubmit,
    register,
  } = useBuyProduct({ id: params.id });

  return (
    <div className="flex flex-col ml-5 mt-8 w-8/12 items-center p-3 gap-5 text-white text-sm bg-slate-800 rounded">
      <ToastContainer />
      <div>{productDetails?.title}</div>
      <span className="flex w-96 justify-between border-b-2 border-slate-700">
        <p>Seu saldo</p>
        <span>
          <p>{formatNumberUSD(Number(userData?.balance))}</p>
          <p className="text-xs">
            {formatedNumberBRL(Number(userData?.balance) * cotacao!)}
          </p>
        </span>
      </span>
      <span className="flex w-96 justify-between border-b-2 border-slate-700">
        <p>Preco do Contrato</p>
        <span>
          <p>{formatNumberUSD(Number(productDetails?.contractValue))}</p>
          <p>
            {formatedNumberBRL(
              Number(productDetails?.contractValue)! * cotacao!
            )}
          </p>
        </span>
      </span>
      <input
        type="password"
        className="w-96 h-7 bg-slate-600 rounded-sm border-none outline-none p-1"
        {...register("password")}
      />
      <div className="flex flex-col gap-1">
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Tempo de contrato</p>
          <p>{productDetails?.contractTime} Dias</p>
        </span>
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Lucro total</p>
          <span>
            <p>
              {formatNumberUSD(
                productDetails?.contractTime! * productDetails?.dailyProfit!
              )}
            </p>
            <p>
              {formatedNumberBRL(
                productDetails?.contractTime! *
                  productDetails?.dailyProfit! *
                  cotacao!
              )}
            </p>
          </span>
        </span>
        <span className="flex w-96 justify-between border-b-2 border-slate-700 pb-3 ">
          <p>Renda fixa</p>
          <p>
            {formatNumberUSD(
              productDetails?.dailyProfit! * productDetails?.contractTime! +
                Number(productDetails?.contractValue!)
            )}
          </p>
        </span>
      </div>
      <button
        onClick={handleSubmit(handleBuyProduct)}
        className="w-96 h-7 rounded-md text-black font-extrabold bg-emerald-400 hover:bg-emerald-700 duration-200"
      >
        Contratar
      </button>
    </div>
  );
}
