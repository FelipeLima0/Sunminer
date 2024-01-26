import axios from 'axios'
import ResponseError from './ResponseError'

export const api = axios.create({
  baseURL: 'https://www.sunminer.com/api',
  timeout: 10000,
  withCredentials: false,
})

api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

interface Params {
  data?: object
  url: string
}

export async function post({ url, data }: Params) {
  const token = localStorage.getItem('token')
  try {
    const response = await api.post(url, {
      ...data,
      token,
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) throw new ResponseError(error)
  }
}
export async function getQuotation(): Promise<number> {
  const response: any = await axios.get(
    'https://economia.awesomeapi.com.br/json/last/USD-BRL',
  )

  console.log(response)
  return response.data.USDBRL.low
}
