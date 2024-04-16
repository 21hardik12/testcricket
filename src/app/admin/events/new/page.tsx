
import { fetchCategories, fetchStadiums } from "@/db/data";
import PageHeader from "../../_components/PageHeader";
import EventForm from "../_components/EventForm";

export default async function NewEventPage() {  
  const categories = await fetchCategories();  
  const stadiums = await fetchStadiums();
  return <>
    <PageHeader>Add Event</PageHeader>    
    <EventForm categories={categories} stadiums={stadiums}/>    
  </>
}