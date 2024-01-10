"use client";
import { useDeposit } from "../../../../hook/useDeposit";

export default function CodePayment() {
  const { codePayment } = useDeposit();
  console.log(codePayment);
  return <div>{codePayment}</div>;
}
