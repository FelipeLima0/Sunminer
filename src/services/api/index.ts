import axios, { AxiosError } from "axios";

import ResponseError from "./ResponseError";

export const api = axios.create({
  baseURL: "https://www.sunminer.com/api",
  timeout: 10000,
  withCredentials: false,
});

api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

interface Params {
  data?: object;
  config?: {
    headers?: object;
  };
  url: string;
}

export async function post({ url, data, config }: Params) {
  try {
    const response = await api.post(url, { ...data }, { ...config });

    return response.data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) throw new ResponseError(error);
  }
}

export async function getQuotation(): Promise<number> {
  const response: any = await axios.get(
    'https://economia.awesomeapi.com.br/json/last/USD-BRL',
  )

    console.log(response)
    return response.data.USDBRL.low
}
