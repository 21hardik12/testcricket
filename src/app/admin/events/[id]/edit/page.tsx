import PageHeader from "@/app/admin/_components/PageHeader";
import { fetchCategories, fetchStadiums } from "@/db/data";

import EventForm from "../../_components/EventForm";
import db from "@/db/db";

export default async function EditEventPage({ params: {id}}: {params: {id: string}}) {  
  const categories = await fetchCategories();  
  const stadiums  = await fetchStadiums();
  const event = await db.event.findUnique({where: {id}, include: {
    images: {
      select: {     
        id: true, 
        url: true,
      }    
    },
  }},);  
  return <>
    <PageHeader>Edit Event</PageHeader>    
    <EventForm  event={event} categories={categories} stadiums={stadiums}/>    
  </>
}