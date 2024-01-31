'use client'

import Logo from '@/assets/LogoLogin.png'
import HeaderLogin from '@/assets/header.png'
import { Button } from '@/components/Button'
import { useLogin } from '@/hooks/useLogin'
import Image from 'next/image'
// ICONS
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

export default function Home() {
  const { handleSubmit, handleUser, register, isValid } = useLogin()

  return (
    <div className="m-auto flex  justify-between p-0 text-gray-50">
      <div className="relative ">
        <Image className="blur-md" src={Logo} alt="#" width={1200} />
        <div className="rounded "></div>
        <span className="absolute left-16 top-32 w-96 text-xl font-extrabold italic leading-9">
          Desperte para um novo amanhecer digital com a Sunminer! Transforme
          seus cliques em oportunidades brilhantes. Embarque na jornada da
          mineração online e descubra um horizonte de possibilidades. Sua fonte
          de riqueza digital começa aqui, na Sunminer – onde a inovação encontra
          a prosperidade.
        </span>
      </div>
      <div className="absolute left-2/3 top-28 m-auto h-80 w-60 rounded-md border-2 border-gray-700 bg-slate-950 ">
        <div className="mt-10 flex flex-col items-center gap-12">
          <Image src={HeaderLogin} width={100} alt="#" />
          <form className="m-auto flex flex-col gap-4">
            <span className="flex h-8 w-52 justify-center gap-2 rounded bg-slate-800">
              <label htmlFor="email">
                <FaUser className="mt-2" />
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                id="email"
                className=" border-none
                bg-transparent text-sm placeholder:text-xs focus:outline-none"
                {...register('username')}
              />
            </span>
            <span className="flex h-8 w-52 justify-center gap-2 rounded bg-slate-800">
              <label htmlFor="password">
                <RiLockPasswordFill className="mt-2" />
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                className=" border-none
                bg-transparent text-sm placeholder:text-xs focus:outline-none"
                {...register('password')}
              />
            </span>
            <Button
              onClick={handleSubmit(handleUser)}
              disabled={!isValid}
              sizes="Enter"
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
