"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CategoryOptions } from "./CategoryOptions";
import { FormEventHandler, useState } from "react";
import { StadiumOptions } from "./StadiumOptions";
import { addEvent, editEvent } from "@/app/admin/_actions/event";
import { useFormState, useFormStatus } from "react-dom";
import { Category, Event, Stadium } from "@prisma/client";
import Image from "next/image";


export default function EventForm({
  event,
  categories,
  stadiums,
}: {
  event?: Event | null;
  categories?: Category[] | undefined;
  stadiums?: Stadium[] | null;
}) {
  const [error, action] = useFormState(event == null ? addEvent : editEvent.bind(null, event.id), {});
  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Event Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={event?.title || ""}
        />
        {error.title && <p className="text-red-500">{error.title}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Event Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={event?.description || ""}
        />
        {error.description && (
          <p className="text-red-500">{error.description}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Event Date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          required
          defaultValue={Number(event?.date) || ""}
        />
        {error.date && <p className="text-red-500">{error.date}</p>}
      </div>      
      <div className="space-y-2">
        <Label htmlFor="images">Event Images</Label>
        <Input
          type="file"
          id="images"
          name="images"
          multiple
          required={event == null}
        />
        {event != null && (
          <div className="text-muted-foreground">
            {event.images.map((image) => {
              return (
                <Image
                  key={image.id}
                  src={image.url}
                  width="400"
                  height="400"
                  alt=""
                />
              );
            })}
          </div>
        )}
        {error.images && <p className="text-red-500">{error.images}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Select Event Category</Label>
        <CategoryOptions categories={categories} event={event} />
        {error.category && <p className="text-red-500">{error.category}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="stadium">Select Stadium</Label>
        <StadiumOptions stadiums={stadiums} event={event} />
        {error.stadium && <p className="text-red-500">{error.stadium}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Adding Event..." : "Add Event"}
    </Button>
  );
}
