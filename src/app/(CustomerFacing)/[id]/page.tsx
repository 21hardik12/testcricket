import { getSingleEvent, getSingleStadium } from "../_actions/allActions";
import EventCarousel from "../_components/EventCarousel";
import { Event, Stadium } from "@prisma/client";
import { EventDetailCard } from "../_components/EventDetailCard";
import { Booking } from "../_components/Booking";
export default async function BookEvent({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getSingleEvent(id);
  if (!event) {
    return null;
  }
  const stadium = await getSingleStadium(event.stadiumId);
  const imagePaths = event?.images.map((image) => image.url);
  imagePaths?.shift();
  return (
    <main className="flex flex-col items-center">
      <EventCarousel images={imagePaths} />
      <EventDetailCard event={event} />
      <Booking stadium={stadium}></Booking>
    </main>
  );
}

//about seat layout and seat selection





