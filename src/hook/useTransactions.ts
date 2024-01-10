"use client";
import { AuthenticationContext } from "@/context/authenticationContext";
import { api } from "@/services/api/api";
import { useCallback, useContext, useEffect, useState } from "react";

interface Props {
  itens: [];
}

export const useTransactions = (): Props => {
  const { userData } = useContext(AuthenticationContext);
  const [itens, setItens] = useState<[]>([]);

  const page = 1;

  const fetch = useCallback(async () => {
    try {
      const data = await api.transactions(userData?.token!, page);
      // console.log(data);
      console.log(data.list.map((item: any) => item.id));
      console.log(data.list.map((item: any) => item.trade_amount));
      console.log(data.list.map((item: any) => item.account_balance));
      setItens(data);
    } catch (error) {}
  }, [userData]);

  console.log(itens);
  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    itens,
  };
};
