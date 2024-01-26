'use client'

import { useTransactions } from '@/hooks/useTransactions'

export default function Transactions() {
  const { name } = useTransactions()

  return (
    <div>
      <span>{name}</span>
    </div>
  )
}
