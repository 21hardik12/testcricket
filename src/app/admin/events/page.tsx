import { Button } from "@/components/ui/button";
import PageHeader from "../_components/PageHeader";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { CheckCircle2, MoreVertical, XCircleIcon } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  ActiveToggleDropdownItem,
  DeleteDropdownItem,
} from "./_components/EventActions";

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Events</PageHeader>
        <Button asChild className="btn btn-primary">
          <Link href="/admin/events/new">Create Event</Link>
        </Button>
      </div>
      <EventsTable></EventsTable>
    </>
  );
}

async function EventsTable() {
  const events = await db.event.findMany({
    select: {
      id: true,
      isAvailableForBooking: true,
      title: true,
      category: {
        select: {
          name: true,
        },
      },
      stadium: {
        select: {
          location: true,
        },
      },
      _count: {
        select: {
          bookings: true,
        },
      },
      date: true,
    },
    orderBy: {
      date: "asc",
    },
  });

  if (events.length === 0) return <p>No events available</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available for Booking</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Stadium</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((_event) => (
          <TableRow key={_event.id}>
            <TableCell>
              {_event.isAvailableForBooking ? (
                <CheckCircle2 />
              ) : (
                <XCircleIcon className="stroke-destructive" />
              )}
            </TableCell>
            <TableCell>{_event.title}</TableCell>
            <TableCell>{_event.stadium.location}</TableCell>
            <TableCell>{_event.category.name}</TableCell>
            <TableCell>{_event.date.toLocaleDateString()}</TableCell>
            <TableCell>{_event._count.bookings}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/events/${_event.id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <ActiveToggleDropdownItem
                    id={_event.id}
                    isAvailableForBooking={_event.isAvailableForBooking}
                  />
                  <DropdownMenuSeparator></DropdownMenuSeparator>
                  <DeleteDropdownItem
                    id={_event.id}
                    disabled={_event._count.bookings > 0}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
