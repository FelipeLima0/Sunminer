'use client'
import { api } from '@/services/api/api'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  name: string
}
const name = ''

export const useTransactions = (): Props => {
  const [values, setValues] = useState(0)

  const fetch = useCallback(async () => {
    try {
      let totalAmount = 0
      // const initialPage = 0
      // const data = await api.transactions(initialPage)
      const totalPages = 2 // data.data_total_page

      for (let page = 2; page <= totalPages; page++) {
        console.log('Acabei de passar aqui')
        const data = await api.transactions(page)
        console.log(data)
        const total = data.list.reduce((acc: any, item: any) => {
          const condition =
            item.remarks === 'Promotion reward' ||
            item.remarks === 'Investment income' // item.jj === '-' || item.jj === '' || !item.jj
          console.log(condition)
          if (condition) return acc + 0
          return acc + Number(item.trade_amount)
        }, 0)
        totalAmount = total + totalAmount
      }
      console.log(totalAmount)
      setValues(totalAmount)
    } catch (error) {
      console.log(error)
    }
  }, [])
  // foreach e for
  useEffect(() => {
    fetch()
  }, [fetch])
  console.log(values)
  return {
    name,
  }
}
