"use server"

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";
import { EventImage } from "@prisma/client";

const fileSchema = z.instanceof(File, {
  message: 'required'
})
const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  images: z.array(imageSchema.refine(file => file.size > 0, "Required")),
  date: z.date(),
  category: z.string().uuid(),
  stadium: z.string().uuid(),
});

export async function addEvent(prevState: unknown, formData: any) {  
  const files = formData.getAll('images');
  
  const formObject = Object.fromEntries(formData.entries());  
  formObject.images = files;
  formObject.date = new Date(formObject.date);
  
  const result = addSchema.safeParse(formObject);
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  
  await fs.mkdir('public/eventImages', { recursive: true });
  const imagePaths = data.images.map(async (image: File) => {
    const imagePath = `/eventImages/${crypto.randomUUID()}-${image.name}`;
    await fs.writeFile(`public${imagePath}`, Buffer.from(await image.arrayBuffer()));
    return imagePath;
  }); 
  const startingPrice = await db.stadium.findUnique({
    where: {
      id: data.stadium,
    },
    select: {
      tickets: {
        orderBy: {
          price: 'asc',          
        },
        take: 1,
        select: {
          price: true
        }
      }
    }
  })
  try {
    const createdEvent = await db.event.create({
      data: {
        title: data.title,
        description: data.description,
        categoryId: data.category,
        stadiumId: data.stadium,
        // create eventImages
        images: {
          createMany: { data: await Promise.all(imagePaths.map(async url => ({ url: await url }))) } // Await the promises inside the map function
        },
        price: startingPrice?.tickets[0]?.price ?? 0, // Add the missing 'price' property with a default value of 0
        date: data.date, // Add the missing 'date' property with a default value
      }      
    })
    console.log(createdEvent);
  } catch (error) {
    console.log(error)
  }

  redirect('/admin/events');
}

const editSchema = addSchema.extend({
  images: z.array(imageSchema).optional(),
})

export async function editEvent(id: string, prevState: unknown, formData: any) {
  const files = formData.getAll('images');
  const formObject = Object.fromEntries(formData.entries());
  formObject.images = files;
  formObject.date = new Date(formObject.date);
  const result = editSchema.safeParse(formObject);
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  try {
    const event = await db.event.findUnique({
      where: { id},
      include: { images: true },
    });

    if (!event) {
      notFound();      
    }

    const imagesToDelete = event.images.filter(
      (existingImage) => !data.images?.some((newImage: File) => newImage.name === existingImage.url)
    );

    await Promise.all(
      imagesToDelete.map(async (image) => {
        await fs.unlink(`public${image.url}`);
        await db.eventImage.delete({ where: { id: image.id } });
      })
    );

    const imagePaths = data.images?.map(async (image: File) => {
      const imagePath = `/eventImages/${crypto.randomUUID()}-${image.name}`;
      await fs.writeFile(`public${imagePath}`, Buffer.from(await image.arrayBuffer()));
      return imagePath;
    });

    const startingPrice = await db.stadium.findUnique({
      where: { id: data.stadium },
      select: {
        tickets: {
          orderBy: { price: 'asc' },
          take: 1,
          select: { price: true },
        },
      },
    });

    const updatedEvent = await db.event.update({
      where: { id: formObject.id },
      data: {
        title: data.title,
        description: data.description,
        categoryId: data.category,
        stadiumId: data.stadium,
        images: {
          createMany: {
            data: await Promise.all(imagePaths?.map(async (url) => ({ url: await url })) || []),
          },
        },
        price: startingPrice?.tickets[0]?.price ?? event.price,
        date: data.date ?? event.date,
      },
    });

    console.log(updatedEvent);
  } catch (error) {
    console.log(error);
  }

  redirect('/admin/events');
}
export async function toggleProductAvailability(id: string, isAvailableForBooking: boolean) {
  await db.event.update({
    where: {
      id,
    },
    data: {
      isAvailableForBooking,
    }
  });  
}

export async function deleteEvent(id: string) {  
  const event = await db.event.delete({
    where: {
      id,
    }, 
    include: {
      images: true,
    }
  });

  if (event == null) return notFound();

  event.images.forEach(async (image) => {
    await fs.unlink(`public${image.url}`);
  });
}