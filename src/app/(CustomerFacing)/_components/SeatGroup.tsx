"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { formatCurrency } from "@/lib/formatters";
import { Ticket } from "@prisma/client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SeatGroup({
  groupedTickets,
}: {
  groupedTickets: any[];
}) {
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )


  const handleToggle = (price: number) => {
    setOpenGroup(openGroup === price ? null : price);
  };

  const handleSelect = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const numberOfSeats = searchParams.get("seats") || 1;
  const totalAmount = (selectedTicket?.price || 0) * Number(numberOfSeats);
  console.log(totalAmount);
  return (
    <>
      <p className="font-bold text-lg">Available Seats</p>
      {groupedTickets?.map((ticketGroup) => (
        <Collapsible key={ticketGroup.price} open={openGroup === ticketGroup.price}>
          <CollapsibleTrigger
            className="w-full"
            onClick={() => handleToggle(ticketGroup.price)}
          >
            <div className="flex justify-between">
              <p className="font-bold text-lg">
                {formatCurrency(ticketGroup.price)}
              </p>
              <IoIosArrowDown className="mt-1 font-bold text-lg" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col">
            {ticketGroup.tickets.map((ticket: Ticket) => (
              <SelectableTicket
                key={ticket.id}
                ticket={ticket}
                isSelected={selectedTicket?.id === ticket.id}
                onSelect={handleSelect}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
      <div>
        <p className="font-bold text-lg">
          Total: {formatCurrency(selectedTicket?.price || 0)} - {numberOfSeats} Seats:{" "}
          {formatCurrency(totalAmount)}
        </p>        
      </div>
      <Link href={`${pathName}/booking?${createQueryString("ticket", selectedTicket?.id ?? '')}`}><button className="flex justify-center w-full py-4 h-auto bg-red-500 rounded-sm text-white text-lg">Book Tickets</button></Link>
    </>
  );
}

function SelectableTicket({
  ticket,
  isSelected,
  onSelect,
}: {
  ticket: Ticket;
  isSelected: boolean;
  onSelect: (ticket: Ticket) => void;
}) {
  const handleClick = () => {
    onSelect(ticket);
  };

  return (
    <div className="flex px-4" onClick={handleClick}>
      <input
        type="radio"
        id={`ticket-${ticket.id}`}
        checked={isSelected}
        readOnly
      />
      <label className="pl-10" htmlFor={`ticket-${ticket.id}`}>
        {ticket.name}
      </label>
    </div>
  );
}


