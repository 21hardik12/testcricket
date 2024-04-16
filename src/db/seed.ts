import { PrismaClient } from "@prisma/client";

import { stadiumImages, stadiums, tickets } from "../lib/initialData";

const prisma = new PrismaClient();

async function main() {
  await prisma.stadiumImage.deleteMany({});
  await prisma.stadium.deleteMany({});
  await prisma.ticket.deleteMany({});

  const createdStadiums = await prisma.stadium.createMany({
    data: stadiums,
  });

  const createdStadiumImages = await prisma.stadiumImage.createMany({
    data: stadiumImages
  });

  const createdTickets = await prisma.ticket.createMany({
    data: tickets,
  });

  console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
