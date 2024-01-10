import { UserDataType } from "@/interface/userData";
import { getQuotation, post } from ".";
import { LoginType } from "@/interface/login";
import { HomeDetails } from "@/interface/homeDetails";
import { IndicationsDetails } from "@/interface/indicationsDetails";
import { Product } from "@/interface/infoProduct";
import { ProductDetails } from "@/interface/productDetails";
import { DetailsStatistic } from "@/interface/detailsStatistic";

export interface CoinArray {
  label: string;
  value: number | string;
}

export interface CoinDeposit {
  label: string;
  value: string;
}

export interface PayBanckCodeType {
  token: string;
  pay_id: number;
}

export interface BuyProduct {
  pid: number;
  amount: number;
  fund_password: string;
  token: string;
}

export const api = {
  login: async ({ username, password }: LoginType): Promise<UserDataType> => {
    const response: any = await post({
      url: "/User/Login",
      data: {
        username,
        password,
        lang: "pt",
      },
    });

    const data: UserDataType = {
      token: response.info.token,
      name: response.info.username,
      balance: response.info.balance,
    };
    console.log(data);
    return data;
  },

  home: async (token: string): Promise<HomeDetails> => {
    const response: any = await post({
      url: "/User/getUserInfo",
      data: {
        token,
      },
    });

    console.log(response);
    const data: HomeDetails = {
      totalBalance: response.info.balance,
      commissionBalance: response.info.total_balance,
      yesterday_earnings: response.info.yesterday_earnings,
      today_earnings: response.info.today_earnings,
      week_earnings: response.info.week_earnings,
      month_earnings: response.info.month_earnings,
      last_month_earnings: response.info.last_month_earnings,
    };
    console.log(response);
    return data;
  },

  statisticsInfo: async (token: string): Promise<DetailsStatistic> => {
    const response = await post({
      url: "/user/getStatisticsInfo",
      data: { token },
    });

    const data: DetailsStatistic = {
      activeMachines: response.info.activity_task,
    };

    return data;
  },

  // transactions: async (token: string, page_no: number): Promise<any> => {
  //   const response: any = await post({
  //     url: "/Transaction/FundDetails",
  //     data: {
  //       token,
  //       page_no,
  //     },
  //   });

  //   // console.log(response.list.map((item: any) => item.trade_amount));
  //   return response;
  // },

  indications: async (token: string): Promise<IndicationsDetails> => {
    const response: any = await post({
      url: "/user/teamReport",
      data: {
        token,
      },
    });

    const data: IndicationsDetails = {
      teamNumber: response.teamNumber,
      teamList: response.teamList,
    };
    console.log(response);
    return data;
  },

  engineProducts: async (token: string): Promise<Product[]> => {
    const response: any = await post({
      url: "/product/productList",
      data: {
        token,
      },
    });

    const data: Product[] = response.data;

    return data;
  },

  productDetails: async (
    token: string,
    id: number
  ): Promise<ProductDetails> => {
    const response: any = await post({
      url: "/product/detail",
      data: {
        token,
        id,
      },
    });

    const data: ProductDetails = {
      contractTime: response.data.cycle,
      dailyProfit: response.data.daily_profit,
      contractValue: response.data.amount,
      title: response.data.title,
    };

    console.log(response);
    return data;
  },

  productBuy: async ({
    amount,
    fund_password,
    pid,
    token,
  }: BuyProduct): Promise<any> => {
    const response: any = await post({
      url: "/product/buy",
      data: {
        amount,
        fund_password,
        pid,
        token,
      },
    });

    return response;
  },

  typesPayment: async (token: string): Promise<CoinArray[]> => {
    const response: any = await post({
      url: "/Account/getBankCardList",
      data: { token },
    });
    const data: [] = response.data;
    console.log(data);

    const coinArray: CoinArray[] = data.map((item: any) => ({
      label: `${item.bank_name} ${item.card_no}`,
      value: item.id,
    }));

    return coinArray;
  },

  typesDeposit: async (token: string): Promise<CoinDeposit[]> => {
    const response: any = await post({
      url: "/Transaction/getRechargetype",
      data: {
        token,
        type: "app",
      },
    });
    const coinDeposit: CoinDeposit[] = response.info.map((item: any) => ({
      label: item.name,
      value: item.id,
    }));
    console.log(coinDeposit);
    return coinDeposit;
  },

  payBanckCode: async (
    token: string,
    pay_id: number
  ): Promise<PayBanckCodeType> => {
    const response = await post({
      url: "/Account/GetPayBankCode",
      data: {
        token,
        pay_id,
      },
    });
    console.log(response);

    return response;
  },
};

// const contractPrice = item?.amount;
// const contractTime = item?.cycle;
// const dailyProfit = item?.daily_profit;

// return { contractPrice, contractTime, dailyProfit };
