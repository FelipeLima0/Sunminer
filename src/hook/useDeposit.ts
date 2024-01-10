"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { HomeDetails } from "@/interface/homeDetails";
import { UserDataType } from "@/interface/userData";
import { CoinDeposit, api } from "@/services/api/api";
import { useRouter } from "next/navigation";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  cotacao: number | undefined;
  dataUser: HomeDetails | undefined;
  typesDeposit: CoinDeposit[] | undefined;
  userData: UserDataType | undefined;
  setselectId: Dispatch<SetStateAction<undefined>>;
  deposit(): Promise<void>;
  codePayment: undefined;
}

export const useDeposit = (): Props => {
  const { cotacao, dataUser, userData } = useContext(AuthenticationContext);
  const [typesDeposit, setTypesDeposit] = useState<CoinDeposit[]>();
  const [selectId, setselectId] = useState();
  const [codePayment, setCodePayment] = useState();
  const router = useRouter();

  const fetch = useCallback(async () => {
    try {
      const data = await api.typesDeposit(userData?.token!);
      setTypesDeposit(data);
    } catch (error) {}
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function deposit() {
    const payId = await api.payBanckCode(userData?.token!, selectId!);
    // const teste = payId.data.map((item) => item.rececode);
    setCodePayment(payId.data[0].rececode);
    // router.push("deposit/codePayment");
  }
  console.log(codePayment);
  return {
    cotacao,
    dataUser,
    typesDeposit,
    userData,
    deposit,
    setselectId,
    codePayment,
  };
};
