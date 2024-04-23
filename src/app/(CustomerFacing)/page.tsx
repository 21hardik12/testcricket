import db from "@/db/db";
import FilterComponent from "@/app/(CustomerFacing)/_components/FilterComponent";
import {getAllCarouselImages} from "./_actions/allActions";
import CardsGridSection from "@/app/(CustomerFacing)/_components/CardsGridSection";
import EventCarousel from "./_components/EventCarousel"
const getAllEvents = async () => {
  const events = await db.event.findMany({
    include: {
      images: true,
      stadium: true,
    },
    orderBy: {
      date: "asc",
    },
  })
  
  return events;
}



export default async function HomePage() {  
  const imagePaths = await getAllCarouselImages();
  return (
    <main>        
        <EventCarousel images={imagePaths} />
        <CardsGridSection eventsFetcher={getAllEvents}/>
    </main>
  );
}








