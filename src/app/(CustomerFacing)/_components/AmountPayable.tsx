"use client";

import { formatCurrency } from "@/lib/formatters";
import { useSearchParams } from "next/navigation"

export default function AmountPayable() {
  const searchParams = useSearchParams();
  const totalAmount = searchParams.get("totalAmount");

  return (
    <div>Amount: <p className="text-green-950 inline">{formatCurrency(Number(totalAmount))}</p></div>
  )
}