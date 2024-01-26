import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'rounded-xl bg-emerald-400 font-bold text-black duration-200 hover:bg-emerald-700',
  variants: {
    sizes: {
      Enter: 'm-auto mt-10 h-10 w-24',
      deposit: 'm-auto flex w-full justify-center',
      products: 'm-auto mt-5 flex w-96 justify-center',
      withdraw: 'm-auto flex w-60 justify-center',
      buyProduct: 'h-7 w-96',
    },
  },
})

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode
  onClick?: () => void // Adicionando a propriedade onClick
  disabled?: boolean
}

export const Button = ({ children, sizes, onClick, disabled }: ButtonProps) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick()
    }
  }

  return (
    <button
      className={button({ sizes })}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
