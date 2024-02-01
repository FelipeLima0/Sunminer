import { user, userForm } from '@/app/schema'
import { useUserData } from '@/context/authenticationContext'
import { api } from '@/services/api/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'

interface Props {
  register: UseFormRegister<userForm>
  handleUser(dataUser: userForm): void
  handleSubmit: UseFormHandleSubmit<userForm>
  isValid: boolean
  state: boolean
}

export const useLogin = (): Props => {
  const [state, setState] = useState(false)
  const { handleLogin } = useUserData()
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
      setState(true)
      const data = await api.login({
        username: dataUser.username,
        password: dataUser.password,
      })

      handleLogin(data)
      router.push('content/dashboard')
    } catch (error) {
      setState(false)
    }
  }

  return {
    handleSubmit,
    handleUser,
    register,
    isValid,
    state
  }
}
