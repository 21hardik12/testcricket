import { Prisma } from "@prisma/client";

export type eventTesting = Event & {
  images: {
    id: string;
    url: string;
    alt: string;
  }[];
  stadium: {
    id: string;
    location: string;
  };
};

export type EventWithImagesAndStadium = ({
  images: {
      id: string;
      url: string;
      eventId: string;
  }[];
  stadium: {
      id: string;
      location: string;
  };
} & {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  price: number;
  date: Date;
  stadiumId: string;
  isAvailableForBooking: boolean;
  createdAt: Date;
  updatedAt: Date;
}) | null

export type eventTesting2 = Prisma.EventGetPayload<{
  include: {
    images: true;
    stadium: true;
  };
}>;