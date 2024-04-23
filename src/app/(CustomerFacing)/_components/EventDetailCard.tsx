import { formatCurrency } from "@/lib/formatters";
import { FaLocationDot } from "react-icons/fa6";
import { Event } from "@prisma/client";
import Link from "next/link";
import { DialogFooter } from "@/components/ui/dialog";
import { BookSeatsDialog } from "./BookSeatsDialog";

export type EventCardProps = {
  event: Event | null;
};

export function EventDetailCard({ event }: EventCardProps) {
  if (!event) {
    return null;
  }

  return (
    <div className="w-11/12 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-2 bg-white text-black ">
        <div className="flex flex-col">
          <p className="font-bold text-2xl">{event.title}</p>
          <p className="text-gray-800">{event.description} | 4hrs</p>
        </div>
        <BookSeatsDialog />
      </div>
      <hr className="px-2" />
      <div className="flex p-2">
        <div>
          <p className="text-gray-900 mb-2">
            {new Date(event.date).toLocaleString(undefined, {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
          <div className="mt-[-8px] px-1 w-fit bg-orange-600 text-white text-xs">
            Filling Fast
          </div>
        </div>

        <div className="flex">
          <FaLocationDot className="ml-8 mt-1 text-yellow-500 text-lg" />
          <p className="flex px-2 text-gray-900">
            {event.stadium.location} | {formatCurrency(event.price)} onwards
          </p>
        </div>
      </div>
    </div>
  );
}
