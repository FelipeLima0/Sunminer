'use client'

import { useUserData } from '@/context/authenticationContext'
import { HomeDetails } from '@/interface/homeDetails'
import { CoinArray, api } from '@/services/api/api'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface Props {
  dataUser: HomeDetails
  cotacao: number
  cards: CoinArray[]
  setId: Dispatch<SetStateAction<string | number>>
}

export const useWithdraw = (): Props => {
  const { dataUser, cotacao } = useUserData()
  const [cards, setCards] = useState<CoinArray[]>([])
  const [id, setId] = useState<string | number>('')
  const fetch = useCallback(async () => {
    try {
      const data = await api.typesPayment()
      setCards(data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(id)
  console.log(cards)
  useEffect(() => {
    fetch()
  }, [fetch])

  return {
    cards,
    cotacao,
    dataUser,
    setId,
  }
}
