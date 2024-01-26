export const formatNumberUSD = (value: string | number) => {
  const formatedNumber = Number(value)

  const formated = formatedNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formated
}

export const formatedNumberBRL = (value: string | number) => {
  const formatedNumber = Number(value)

  if (!value) return '0'

  const formated = formatedNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formated
}
