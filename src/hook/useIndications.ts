"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { IndicationsDetails } from "@/interface/indicationsDetails";
import { api } from "@/services/api/api";
import { useCallback, useContext, useEffect, useState } from "react";

interface Props {
  indicationsDetails: IndicationsDetails | undefined;
}

export const useIndications = (): Props => {
  const [indicationsDetails, setIndicationsDetails] =
    useState<IndicationsDetails>();
  const { userData } = useContext(AuthenticationContext);

  const fetch = useCallback(async () => {
    try {
      const data = await api.indications(userData?.token!);
      setIndicationsDetails(data);
    } catch (error) {}
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    indicationsDetails,
  };
};
