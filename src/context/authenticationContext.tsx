"use client";
import { HomeDetails } from "@/interface/homeDetails";
import { UserDataType } from "@/interface/userData";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface AuthenticationContextType {
  setUserData(data: UserDataType): void;
  userData: UserDataType | undefined;
  exitlogin(): void;
  setDataUser(data: HomeDetails): void;
  dataUser: HomeDetails | undefined;
  setCotacao(data: number): void;
  cotacao: number | undefined;
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType
);

export default function AuthenticationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userData, setUserData] = useState<UserDataType>();
  const [dataUser, setDataUser] = useState<HomeDetails>();
  const [cotacao, setCotacao] = useState<number>();
  const router = useRouter();

  if (userData === undefined) {
    router.push("/");
  }

  useEffect(() => {}, []);

  const exitlogin = () => {
    setUserData(undefined);
    router.push("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        setUserData,
        userData,
        exitlogin,
        cotacao,
        dataUser,
        setCotacao,
        setDataUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
