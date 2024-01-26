'use client'
import { HomeDetails } from '@/interface/homeDetails'
import { UserDataType } from '@/interface/userData'
import { useRouter } from 'next/navigation'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const defaultValuesLogin: UserDataType = {
  balance: '0',
  name: '',
  token: '',
}

const defaultValuesDetailsUser: HomeDetails = {
  totalBalance: '0',
  commissionBalance: '0',
  yesterday_earnings: 0,
  today_earnings: 0,
  week_earnings: 0,
  month_earnings: 0,
  last_month_earnings: 0,
}

export interface AuthenticationContextType {
  handleLogin(data: UserDataType): void
  userData: UserDataType
  exitlogin(): void
  setDataUser(data: HomeDetails): void
  dataUser: HomeDetails
  setCotacao(data: number): void
  cotacao: number
  setCodePayment: Dispatch<SetStateAction<string>>
  codePayment: string
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType,
)

export default function AuthenticationProvider({
  children,
}: {
  children: ReactNode
}) {
  const [userData, setUserData] = useState<UserDataType>(defaultValuesLogin)
  const [dataUser, setDataUser] = useState<HomeDetails>(
    defaultValuesDetailsUser,
  )
  const [cotacao, setCotacao] = useState<number>(0)
  const [codePayment, setCodePayment] = useState<string>('')

  const router = useRouter()

  // TODO: quando expirar o token, remover ele da store e redirecionar para o login

  // if (userData === defaultValuesLogin) {
  //   // router.push('/')
  // }

  const exitlogin = () => {
    localStorage.clear()
    router.push('/')
  }

  const handleLogin = (userData: UserDataType) => {
    setUserData(userData)
    localStorage.setItem('token', userData.token)
  }

  return (
    <AuthenticationContext.Provider
      value={{
        handleLogin,
        userData,
        exitlogin,
        cotacao,
        dataUser,
        setCotacao,
        setDataUser,
        codePayment,
        setCodePayment,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useUserData = (): AuthenticationContextType => {
  const context = useContext(AuthenticationContext)
  if (!context) {
    throw new Error('useUserData must be used within an AuthenticationProvider')
  }
  return context
}
