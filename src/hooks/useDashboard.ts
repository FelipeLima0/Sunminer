'use client'

import { useUserData } from '@/context/authenticationContext'
import { DetailsStatistic } from '@/interface/detailsStatistic'
import { HomeDetails } from '@/interface/homeDetails'
import { getQuotation } from '@/services/api'
import { api } from '@/services/api/api'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  cotacao: number
  dataUser: HomeDetails
  statisticDetails: DetailsStatistic | undefined
}

export const useDashboard = (): Props => {
  const { setCotacao, setDataUser, cotacao, dataUser } = useUserData()

  const [statisticDetails, setStatisticDetails] = useState<DetailsStatistic>()

  const fetch = useCallback(async () => {
    try {
      const data = await api.home()
      setDataUser(data)
      const statistic = await api.statisticsInfo()
      setStatisticDetails(statistic)
      const quotation = await getQuotation()
      setCotacao(quotation)
      // HORAIO DA COMPRA
      const engineTime = await api.rentalTime(1, 1, 2)
      console.log(engineTime.map((item: any) => item.addtime_txt))
    } catch (error) {
      console.log(error)
    }
  }, [setCotacao, setDataUser])
  useEffect(() => {
    fetch()
  }, [fetch])

  return {
    cotacao,
    dataUser,
    statisticDetails,
  }
}
