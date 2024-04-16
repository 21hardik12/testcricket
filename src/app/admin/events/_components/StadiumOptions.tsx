import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stadium, Event } from "@prisma/client";

export function StadiumOptions({
  stadiums, event
}: {
  stadiums?: Stadium[] | null, event?: Event | null
}) {
  if (!stadiums) {
    return <></>;
  }

  return (
    <>
      <Select name="stadium" defaultValue={event?.stadiumId || ""}>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="Select Stadium" />
        </SelectTrigger>
        <SelectContent>
          {stadiums.map((stadium) => {
            if (stadium) {
              return (
                <SelectItem key={stadium.id} value={stadium.id}>
                  {stadium.location}
                </SelectItem>
              );
            } else {
              return null;
            }
          })}
        </SelectContent>
      </Select>
    </>
  );
}