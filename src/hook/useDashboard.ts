"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { DetailsStatistic } from "@/interface/detailsStatistic";
import { HomeDetails } from "@/interface/homeDetails";
import { getQuotation } from "@/services/api";
import { api } from "@/services/api/api";
import { useCallback, useContext, useEffect, useState } from "react";

interface Props {
  cotacao: number | undefined;
  dataUser: HomeDetails | undefined;
  statisticDetails: DetailsStatistic | undefined;
}

export const useDashboard = (): Props => {
  const { userData, setCotacao, setDataUser, cotacao, dataUser } = useContext(
    AuthenticationContext
  );

  const [statisticDetails, setStatisticDetails] = useState<DetailsStatistic>();

  const fetch = useCallback(async () => {
    try {
      const data = await api.home(userData?.token!);
      const statistic = await api.statisticsInfo(userData?.token!);
      const quotation = await getQuotation();
      setStatisticDetails(statistic);
      setCotacao(quotation);
      setDataUser(data);
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    cotacao,
    dataUser,
    statisticDetails,
  };
};
