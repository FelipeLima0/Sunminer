'use client'
import header from '@/assets/header.png'
import { AuthenticationContext } from '@/context/authenticationContext'
import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// INCONS
import { HiHome } from 'react-icons/hi2'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { SiAdminer } from 'react-icons/si'
import { IoIosExit } from 'react-icons/io'
import { GrTransaction } from 'react-icons/gr'

export const Sidebar = () => {
  const { exitlogin } = useContext(AuthenticationContext)
  return (
    <div className="w-47 ml-1 font-sans text-slate-200">
      <Image src={header} width={110} alt="#" className="mb-6 ml-2 mt-6" />
      <aside className="text-xs font-medium">
        <Link
          href={'/content/dashboard'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <HiHome size={18} className="ml-2" />
          <span>Painel</span>
        </Link>
        <Link
          href={'/content/deposit'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <FaWallet size={18} className="ml-2" />
          <span>Deposito</span>
        </Link>
        <Link
          href={'/content/withdraw'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <BiMoneyWithdraw size={18} className="ml-2" />
          <span>Retirar</span>
        </Link>
        <Link
          href={'/content/indications'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <FaUserFriends size={18} className="ml-2" />
          <span className="">Afiliados</span>
        </Link>
        <Link
          href={'/content/products'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <SiAdminer size={18} className="ml-2" />
          <span className="">Maquinas</span>
        </Link>
        <Link
          href={'/content/transactions'}
          className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-1 duration-200 hover:bg-slate-950 hover:pl-2"
        >
          <GrTransaction size={18} className="ml-2" />
          <span className="">Transacoes</span>
        </Link>
        <ul className="mb-4 ml-2 mr-6 flex h-7 w-32 gap-4 rounded pt-0.5 duration-200 hover:bg-slate-950 hover:pl-2">
          <IoIosExit size={18} className="ml-2 mt-1" />
          <button onClick={exitlogin} className=" ">
            Sair
          </button>
        </ul>
      </aside>
    </div>
  )
}
