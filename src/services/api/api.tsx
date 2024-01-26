/* eslint-disable camelcase */
import { UserDataType } from '@/interface/userData'
import { post } from '.'
import { LoginType } from '@/interface/login'
import { HomeDetails } from '@/interface/homeDetails'
import { IndicationsDetails } from '@/interface/indicationsDetails'
import { Product } from '@/interface/infoProduct'
import { ProductDetails } from '@/interface/productDetails'
import { DetailsStatistic } from '@/interface/detailsStatistic'

export interface CoinArray {
  label: string
  value: number | string
}

export interface CoinDeposit {
  label: string
  value: string
}

export interface Values {
  amount: string
}

interface BuyProduct {
  pid: number
  amount: number
  fund_password: string
}

export const api = {
  login: async ({ username, password }: LoginType): Promise<UserDataType> => {
    const response: any = await post({
      url: '/User/Login',
      data: {
        username,
        password,
        lang: 'pt',
      },
    })

    const data: UserDataType = {
      token: response.info.token,
      name: response.info.username,
      balance: response.info.balance,
    }
    console.log(data)
    return data
  },

  home: async (): Promise<HomeDetails> => {
    const response: any = await post({
      url: '/User/getUserInfo',
    })

    console.log(response)
    const data: HomeDetails = {
      totalBalance: response.info.balance,
      commissionBalance: response.info.total_balance,
      yesterday_earnings: response.info.yesterday_earnings,
      today_earnings: response.info.today_earnings,
      week_earnings: response.info.week_earnings,
      month_earnings: response.info.month_earnings,
      last_month_earnings: response.info.last_month_earnings,
    }
    console.log(response)
    return data
  },

  rentalTime: async (
    status: number,
    page_no: number,
    is_u: number,
  ): Promise<any> => {
    const response = await post({
      url: '/product/getUserProductList',
      data: {
        status,
        is_u,
        page_no,
      },
    })

    const data = response.data.data

    // console.log(response)
    return data
  },
  // /product/getUserProductList

  statisticsInfo: async (): Promise<DetailsStatistic> => {
    const response = await post({
      url: '/user/getStatisticsInfo',
      data: {},
    })

    const data: DetailsStatistic = {
      activeMachines: response.info.activity_task,
    }
    console.log(response)
    return data
  },

  transactions: async (page_no: number): Promise<any> => {
    const response: any = await post({
      url: '/Transaction/FundDetails',
      data: {
        page_no,
      },
    })
    // const trades = response.map((item: any) => ({
    //   label: `${item.bank_name} ${item.card_no}`,
    //   value: item.id,
    // }))
    // const data: Values = response.list.map((item: any) => ({
    //   amount: `${item.trade_amount}`,
    // }))
    return response
  },

  indications: async (): Promise<IndicationsDetails> => {
    const response: any = await post({
      url: '/user/teamReport',
    })

    const data: IndicationsDetails = {
      teamNumber: response.teamNumber,
      teamList: response.teamList,
    }

    return data
  },

  engineProducts: async (): Promise<Product[]> => {
    const response: any = await post({
      url: '/product/productList',
    })

    const data: Product[] = response.data

    return data
  },

  productDetails: async (id: number): Promise<ProductDetails> => {
    const response: any = await post({
      url: '/product/detail',
      data: {
        id,
      },
    })

    const data: ProductDetails = {
      contractTime: response.data.cycle,
      dailyProfit: response.data.daily_profit,
      contractValue: response.data.amount,
      title: response.data.title,
    }

    console.log(response)
    return data
  },

  productBuy: async ({
    amount,
    fund_password,
    pid,
  }: BuyProduct): Promise<any> => {
    const response: any = await post({
      url: '/product/buy',
      data: {
        amount,
        fund_password,
        pid,
      },
    })

    return response
  },

  typesPayment: async (): Promise<CoinArray[]> => {
    const response: any = await post({
      url: '/Account/getBankCardList',
    })
    const data: [] = response.data
    console.log(data)

    const coinArray: CoinArray[] = data.map((item: any) => ({
      label: `${item.bank_name} ${item.card_no}`,
      value: item.id,
    }))

    return coinArray
  },

  typesDeposit: async (): Promise<CoinDeposit[]> => {
    const response: any = await post({
      url: '/Transaction/getRechargetype',
      data: {
        type: 'app',
      },
    })
    const coinDeposit: CoinDeposit[] = response.info.map((item: any) => ({
      label: item.name,
      value: item.id,
    }))
    console.log(coinDeposit)
    return coinDeposit
  },

  payBanckCode: async (
    // eslint-disable-next-line camelcase
    pay_id: number,
  ): Promise<[any]> => {
    const response = await post({
      url: '/Account/GetPayBankCode',
      data: {
        // eslint-disable-next-line camelcase
        pay_id,
      },
    })
    const data = response.data

    return data
  },
}
