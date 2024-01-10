"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { ProductDetails } from "@/interface/productDetails";
import { UserDataType } from "@/interface/userData";
import { api } from "@/services/api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useContext, useEffect, useState } from "react";
import { UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import * as z from "zod";

type userForm = z.infer<typeof passwordBuy>;

const passwordBuy = z.object({
  password: z.string(),
});

interface PropsParams {
  id: number;
}

interface Props {
  productDetails: ProductDetails | undefined;
  cotacao: number | undefined;
  handleBuyProduct(passwordBuy: userForm): Promise<void>;
  userData: UserDataType | undefined;
  handleSubmit: UseFormHandleSubmit<
    {
      password: string;
    },
    undefined
  >;
  register: UseFormRegister<{
    password: string;
  }>;
}

export function useBuyProduct({ id }: PropsParams): Props {
  const [productDetails, setProductDetails] = useState<ProductDetails>();

  const { userData, cotacao } = useContext(AuthenticationContext);

  const { register, handleSubmit, reset } = useForm<userForm>({
    resolver: zodResolver(passwordBuy),
    defaultValues: {
      password: "",
    },
  });

  const fetch = useCallback(async () => {
    try {
      const data = await api.productDetails(userData?.token!, id);
      setProductDetails(data);
    } catch (error) {}
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function handleBuyProduct(passwordBuy: userForm) {
    if (userData?.balance! >= productDetails?.contractValue!) {
      const amount = Number(productDetails?.contractValue);

      const data = await api.productBuy({
        amount: amount,
        fund_password: passwordBuy.password,
        pid: id,
        token: userData?.token!,
      });
      const notify = () => toast(data.code_dec);
      passwordBuy.password = "";
      reset({ password: "" });
      notify();
    } else {
      const notify = () =>
        toast("Seu saldo e insuficiente, escolha outro produto");
      notify();
      reset({ password: "" });
    }
  }

  return {
    cotacao,
    handleBuyProduct,
    productDetails,
    userData,
    handleSubmit,
    register,
  };
}
