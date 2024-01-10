"use client";
import Image from "next/image";
import Link from "next/link";
import header from "@/assets/header.png";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/authenticationContext";

//INCONS
import { HiHome } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { SiAdminer } from "react-icons/si";
import { IoIosExit } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";

export const Sidebar = () => {
  const { exitlogin } = useContext(AuthenticationContext);
  return (
    <div className="w-47 ml-1 text-slate-200 font-sans">
      <Image src={header} width={110} alt="#" className="mt-6 mb-6 ml-2" />
      <aside className="text-xs font-medium">
        <Link
          href={"/content/dashboard"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <HiHome size={18} className="ml-2" />
          <span>Painel</span>
        </Link>
        <Link
          href={"/content/deposit"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <FaWallet size={18} className="ml-2" />
          <span>Deposito</span>
        </Link>
        <Link
          href={"/content/withdraw"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <BiMoneyWithdraw size={18} className="ml-2" />
          <span>Retirar</span>
        </Link>
        <Link
          href={"/content/indications"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <FaUserFriends size={18} className="ml-2" />
          <span className="">Afiliados</span>
        </Link>
        <Link
          href={"/content/products"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <SiAdminer size={18} className="ml-2" />
          <span className="">Maquinas</span>
        </Link>
        <Link
          href={"/content/transactions"}
          className="flex gap-4 ml-2 mr-6 mb-4 pt-1 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200"
        >
          <GrTransaction size={18} className="ml-2" />
          <span className="">Transacoes</span>
        </Link>
        <ul className="flex gap-4 ml-2 mr-6 mb-4 pt-0.5 h-7 w-32 rounded hover:pl-2 hover:bg-slate-950 duration-200">
          <IoIosExit size={18} className="ml-2 mt-1" />
          <button onClick={exitlogin} className=" ">
            Sair
          </button>
        </ul>
      </aside>
    </div>
  );
};
