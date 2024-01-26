import { user, userForm } from '@/app/schema'
import { useUserData } from '@/context/authenticationContext'
import { api } from '@/services/api/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'

interface Props {
  loading: boolean
  register: UseFormRegister<userForm>
  handleUser(dataUser: userForm): void
  handleSubmit: UseFormHandleSubmit<userForm>
  isValid: boolean
}

export const useLogin = (): Props => {
  const { handleLogin } = useUserData()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<userForm>({
    resolver: zodResolver(user),
  })

  async function handleUser(dataUser: userForm) {
    try {
      setLoading(false)
      const data = await api.login({
        username: dataUser.username,
        password: dataUser.password,
      })

      console.log(dataUser)
      handleLogin(data)
      router.push('content/dashboard')
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }
  return {
    handleSubmit,
    handleUser,
    loading,
    register,
    isValid,
  }
}
