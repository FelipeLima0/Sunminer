"use client";

import { useTransactions } from "../../../hook/useTransactions";

export default function Transactions() {
  const { itens } = useTransactions();

  // console.log(
  //   itens.list.map((item) => (

  //   ))
  // );

  return (
    <div>
      <span></span>
    </div>
  );
}
