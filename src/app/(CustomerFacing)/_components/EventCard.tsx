import { Event, Prisma } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "../../../components/ui/card";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";
import Link from "next/link";

type EventCardProps = {
  event: Event | null;
};

export default function EventCard({ event }: EventCardProps) {
  if (!event) {
    return null;
  }

  return (
    <Link href={`/${event.id}/`}>
      <Card className="w-full max-w-sm mx-auto my-4">
        <div className="relative w-full">
          <Image
            src={event.images[0]?.url}
            alt={event.title}
            width={384}
            height={216}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <CardContent className="p-4">
          <CardTitle className="line-clamp-2 text-xl font-bold mb-2">{event.title}</CardTitle>
          <div>
            <p className="text-gray-600 mb-1">{event.stadium.name}</p>
            <p className="text-gray-500 mb-2">{event.description}</p>
            <p className="text-gray-700">From {formatCurrency(event.price)} onwards</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}



// import { Event, Prisma } from "@prisma/client";
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
// import Image from "next/image";
// import db from "@/db/db";
// import { EventWithImagesAndStadium, eventTesting2 } from "@/lib/types";
// import { formatCurrency } from "@/lib/formatters";

// type EventCardProps = {
//   event: Event | null;
// };

// export default function EventCard({ event }: EventCardProps) {
//   if (!event) {
//     return null;
//   }

//   return (
//     <Card className="flex flex-col items-start w-[203px] bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="relative">
//         <Image
//           width={203}
//           height={345}
//           src={event.images[0].url}
//           alt={"Event Image"}
//           className="w-full h-auto"
//         />        
//       </div>
//       <div className="p-1">
//         <div className="text-lg leading-5 line-clamp-2 font-bold mb-1">{event.title}</div>
//         <div className="text-gray-500 mb-1">{event.stadium.name}</div>
//         <div className="text-gray-500 mb-1">{event.description}</div>
//         <div className="text-gray-500">
//           {formatCurrency(event.price)} onwards
//         </div>
//       </div>
//     </Card>
//   );
// }
