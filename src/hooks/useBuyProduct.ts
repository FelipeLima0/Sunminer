'use client'

import { passwordBuy, usePassword } from '@/app/content/products/[id]/schema'
import { useUserData } from '@/context/authenticationContext'
import { ProductDetails } from '@/interface/productDetails'
import { UserDataType } from '@/interface/userData'
import { api } from '@/services/api/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'

import { toast } from 'react-toastify'

const defaultValuesProducts: ProductDetails = {
  contractTime: 0,
  dailyProfit: 0,
  contractValue: '0',
  title: '',
}

interface PropsParams {
  id: number
}

interface Props {
  productDetails: ProductDetails
  cotacao: number
  handleBuyProduct(passwordBuy: usePassword): Promise<void>
  userData: UserDataType
  handleSubmit: UseFormHandleSubmit<usePassword, undefined>
  register: UseFormRegister<usePassword>
  isValid: boolean
}

export function useBuyProduct({ id }: PropsParams): Props {
  const [productDetails, setProductDetails] = useState<ProductDetails>(
    defaultValuesProducts,
  )

  const { userData, cotacao } = useUserData()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<usePassword>({
    resolver: zodResolver(passwordBuy),
    defaultValues: {
      password: '',
    },
  })

  const fetch = useCallback(async () => {
    try {
      const data = await api.productDetails(id)
      setProductDetails(data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])

  async function handleBuyProduct(passwordBuy: usePassword) {
    if (userData.balance >= productDetails.contractValue) {
      const amount = Number(productDetails.contractValue)

      const data = await api.productBuy({
        amount,
        fund_password: passwordBuy.password,
        pid: id,
      })
      const notify = () => toast(data.code_dec)
      passwordBuy.password = ''
      reset({ password: '' })
      notify()
    } else {
      const notify = () =>
        toast('Seu saldo e insuficiente, escolha outro produto')
      notify()
      reset({ password: '' })
    }
  }

  return {
    cotacao,
    handleBuyProduct,
    productDetails,
    userData,
    handleSubmit,
    register,
    isValid,
  }
}
