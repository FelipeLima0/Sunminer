"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { HomeDetails } from "@/interface/homeDetails";
import { CoinArray, api } from "@/services/api/api";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  dataUser: HomeDetails | undefined;
  cotacao: number | undefined;
  cards: CoinArray[];
  setId: Dispatch<SetStateAction<string | number>>;
}

export const useWithdraw = (): Props => {
  const [teste, setTeste] = useState();

  const { userData, dataUser, cotacao } = useContext(AuthenticationContext);
  const [cards, setCards] = useState<CoinArray[]>([]);
  const [id, setId] = useState<string | number>("");
  const fetch = useCallback(async () => {
    try {
      const data = await api.typesPayment(userData?.token!);
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    cards,
    cotacao,
    dataUser,
    setId,
  };
};
