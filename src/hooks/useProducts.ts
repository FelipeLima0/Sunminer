'use client'

import { useUserData } from '@/context/authenticationContext'
import { Product } from '@/interface/infoProduct'
import { api } from '@/services/api/api'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  products: Product[] | undefined
  cotacao: number
  handleProduct(id: number): void
}

export const useProduct = (): Props => {
  const [products, setProducts] = useState<Product[]>()
  const { cotacao } = useUserData()

  const { push } = useRouter()

  const fetch = useCallback(async () => {
    try {
      const data = await api.engineProducts()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  const handleProduct = (id: number) => {
    push(`/content/products/${id}`)
  }

  return {
    products,
    cotacao,
    handleProduct,
  }
}
