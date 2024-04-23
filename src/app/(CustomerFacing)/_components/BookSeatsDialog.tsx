"use client"

import { IoIosArrowDown } from "react-icons/io";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
// import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function BookSeatsDialog() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(1);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const handleClose = () => {
    router.push(`${pathName}?${createQueryString("seats", selectedNumber?.toString() ?? '1')}`)
  }

  return (
    <Dialog>
      <DialogTrigger className="flex px-4 py-4 h-auto bg-red-500 rounded-sm text-white text-lg">
        <p>Select Number of Seats</p>
        <IoIosArrowDown className="ml-1 mt-1 inline" />
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <p className="font-bold text-lg">How many seats ?</p>
        <Image
          width={195}
          height={115}
          alt=""
          src={"/generalAssets/howmanytickets.png"}
        ></Image>
        <div className="flex justify-around gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-center p-3 rounded-full text-white text-base cursor-pointer ${
                selectedNumber === i + 1 ? "bg-red-500" : "bg-gray-300"
              }`}
              style={{ height: 30, width: 30 }}
              onClick={() => handleNumberClick(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="px-2 flex gap-4 items-start justify-center w-3/6 bg-gray-200">
          <FaInfoCircle className="w-14 mt-1 text-gray-800" />
          <p className="text-xs text-black">
            1 is the minimum and 10 is the maximum quantity of tickets you can
            purchase for this event.
          </p>
        </div>
        <DialogClose asChild><button onClick={handleClose} className="bg-red-500 text-white w-full py-1">Continue</button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
