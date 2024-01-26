'use client'

import { useUserData } from '@/context/authenticationContext'
import { HomeDetails } from '@/interface/homeDetails'
import { UserDataType } from '@/interface/userData'
import { CoinDeposit, api } from '@/services/api/api'
import { AmountValueType, amountValue } from '@/app/content/deposit/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

import { toast } from 'react-toastify'

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'

interface Props {
  cotacao: number
  dataUser: HomeDetails
  typesDeposit: CoinDeposit[]
  userData: UserDataType
  setselectId: Dispatch<SetStateAction<number>>
  selectId: number
  deposit(amount: AmountValueType): Promise<void>
  handleButtonClick: (value: any) => void
  register: UseFormRegister<AmountValueType>
  handleSubmit: UseFormHandleSubmit<AmountValueType>
  codePayment: string
  isValid: boolean
}

export const useDeposit = (): Props => {
  const { cotacao, dataUser, setCodePayment, codePayment, userData } =
    useUserData()
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid },
  } = useForm<AmountValueType>({
    resolver: zodResolver(amountValue),
  })
  const [typesDeposit, setTypesDeposit] = useState<CoinDeposit[]>([])
  const [selectId, setselectId] = useState(0)
  const { push } = useRouter()

  // FUNCOES
  const handleButtonClick = (value: any) => {
    setselectId(value)
  }

  // FUNCAO PARA RENDER TIPOS DE DEPOSITO
  const fetch = useCallback(async () => {
    try {
      const data = await api.typesDeposit()
      setTypesDeposit(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  // FUNCAO PARA FAZER O DEPOSITO
  async function deposit(amount: AmountValueType) {
    if (Number(amount.amount) >= 100) {
      // ARMAZENAR O CODIGO DE DEPOSITO PAYID
      const payId = await api.payBanckCode(selectId)
      const qrid = payId[0].rececode
      setCodePayment(qrid)
      reset({ amount: '' })
      push('deposit/codePayment')
    } else {
      reset({ amount: '' })
      toast('O valor do deposito deve ser igual ou maior que $100.00')
    }
  }
  console.log(codePayment)
  return {
    cotacao,
    dataUser,
    typesDeposit,
    userData,
    deposit,
    setselectId,
    selectId,
    register,
    handleSubmit,
    handleButtonClick,
    codePayment,
    isValid,
  }
}
