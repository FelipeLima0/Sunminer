"use client";

import Image from "next/image";
import Logo from "@/assets/LogoLogin.png";
import HeaderLogin from "@/assets/header.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Loading from "@/components/Loading";
import { useLogin } from "../hook/useLogin";

export default function Home() {
  const { handleSubmit, handleUser, loading, register } = useLogin();

  return (
    <div className="flex justify-between  m-auto p-0 text-gray-50">
      <div className="relative ">
        <Image className="blur-md" src={Logo} alt="#" width={1200} />
        <div className="rounded "></div>
        <span className="absolute w-96 text-xl font-extrabold italic left-16 top-32 leading-9">
          Desperte para um novo amanhecer digital com a Sunminer! Transforme
          seus cliques em oportunidades brilhantes. Embarque na jornada da
          mineração online e descubra um horizonte de possibilidades. Sua fonte
          de riqueza digital começa aqui, na Sunminer – onde a inovação encontra
          a prosperidade.
        </span>
      </div>
      <div className="absolute left-2/3 top-28 w-60 h-80 m-auto rounded-md bg-slate-950 border-2 border-gray-700 ">
        <div className="flex flex-col items-center mt-10 gap-12">
          <Image src={HeaderLogin} width={100} alt="#" />
          <form action="" className="flex flex-col m-auto gap-4">
            <span className="flex w-52 h-8 justify-center rounded bg-slate-800 gap-2">
              <label htmlFor="email">
                <FaUser className="mt-2" />
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                id="email"
                className=" bg-transparent
                border-none focus:outline-none text-sm placeholder:text-xs"
                {...register("username")}
                required
              />
            </span>
            <span className="flex w-52 h-8 justify-center rounded bg-slate-800 gap-2">
              <label htmlFor="password">
                <RiLockPasswordFill className="mt-2" />
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                className=" bg-transparent
                border-none focus:outline-none text-sm placeholder:text-xs"
                {...register("password")}
                required
              />
            </span>

            {loading ? (
              <button
                onClick={handleSubmit(handleUser)}
                className="m-auto mt-10 w-24 h-10  bg-emerald-400 text-black font-bold rounded-xl hover:bg-emerald-700 duration-200"
              >
                Entrar
              </button>
            ) : (
              <Loading />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
