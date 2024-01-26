'use client'

import { IndicationsDetails } from '@/interface/indicationsDetails'
import { api } from '@/services/api/api'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  indicationsDetails: IndicationsDetails | undefined
}

export const useIndications = (): Props => {
  const [indicationsDetails, setIndicationsDetails] =
    useState<IndicationsDetails>()

  const fetch = useCallback(async () => {
    try {
      const data = await api.indications()
      setIndicationsDetails(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return {
    indicationsDetails,
  }
}
