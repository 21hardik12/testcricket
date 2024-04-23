import { getTicketsGroupedByPrice } from "../_actions/allActions";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { Stadium } from "@prisma/client";
import SeatGroup from "./SeatGroup";
import TermsAndConditions from "./TermsAndConditions";

export type BookingProps = {
  stadium: Stadium | null;
};

export async function Booking({ stadium }: BookingProps) {
  const groupedTickets = stadium
    ? await getTicketsGroupedByPrice(stadium.id)
    : null;  
  return (
    <div className="my-8 p-2 flex flex-col gap-4 w-1/2">
      <p className="font-bold">About</p>
      <p>
        Book tickets for Kolkata Knight Riders vs Punjab Kings IPL 2024 cricket
        for Fri April 26th, 2024 at Eden Gardens Stadium on BookMyShow.
        Experience Kolkata Knight Riders and Punjab Kings live at the Stadium
        this year
      </p>
      <div>
        <Collapsible>
          <CollapsibleTrigger className="w-full">
            <div className="flex justify-between">
              <p className="font-bold text-lg">Venue Layout</p>
              <IoIosArrowDown className="mt-1 font-bold text-lg" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-center">
            <Image
              height={400}
              width={400}
              src={stadium.images[0].url}
              alt=""
            ></Image>
          </CollapsibleContent>
        </Collapsible>
        <SeatGroup groupedTickets={groupedTickets || []} />
        <TermsAndConditions />
      </div>
    </div>
  );
}
