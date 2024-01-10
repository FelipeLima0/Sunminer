"use client";

import { AuthenticationContext } from "@/context/authenticationContext";
import { Product } from "@/interface/infoProduct";
import { api } from "@/services/api/api";
import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  products: Product[] | undefined;
  cotacao: number | undefined;
  handleProduct(id: number): void;
}

export const useProduct = (): Props => {
  const [products, setProducts] = useState<Product[]>();
  const { userData, cotacao } = useContext(AuthenticationContext);

  const { push } = useRouter();

  const fetch = useCallback(async () => {
    try {
      const data = await api.engineProducts(userData?.token!);
      setProducts(data);
    } catch (error) {}
  }, [userData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleProduct = (id: number) => {
    push(`/content/products/${id}`);
  };

  return {
    products,
    cotacao,
    handleProduct,
  };
};
