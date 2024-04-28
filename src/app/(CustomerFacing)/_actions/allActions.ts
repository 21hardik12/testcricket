"use server";

import db from "@/db/db";
import fs from "fs/promises";
import { number } from "zod";

export const getTicket = async (id: string) => {
  const ticket = await db.ticket.findUnique({
    where: {
      id,      
    },
    include: {
      stadium: true,
    }
  }); 

  return ticket;
}

export const getEventWithoutImages = async (id: string) => {
  const event = await db.event.findUnique({
    where: {
      id,
    },
    include: {
      stadium: true,
    }
  });
  return event;

}

export const getSingleEvent = async (id: string) => {
  const event = await db.event.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
      stadium: true,
    },
  });
  return event;
};

export const getTicketsGroupedByPrice = async (stadiumId: string) => {
  const groupedtickets = await db.ticket.groupBy({
    by: ["price"],
    where: {
      stadiumId,
    },
  });
  const ticketsForEachPrice = await Promise.all( 
    groupedtickets.map(async (ticket) => {
      const tickets = await db.ticket.findMany({
        where: {
          price: ticket.price,
          stadiumId,
        }
      });
      return {price: ticket.price, tickets: [...tickets]};
    })
  );

  return ticketsForEachPrice;
};

export const getSingleStadium = async (id: string) => {
  const stadium = await db.stadium.findUnique({
    where: {
      id,
    },
    include: {
      images: true,      
    },
  });
  return stadium;
};

export async function getAllCarouselImages() {
  let imageFiles = await fs.readdir("public/carouselImages");
  const imagePaths = imageFiles.map((file) => `/carouselImages/${file}`);
  return imagePaths;
}
