import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Event } from "@prisma/client";


export function CategoryOptions({
  categories, event
}: {
  categories?: Category[] | null, event?: Event | null
}) {
  if (!categories) {
    return <></>;
  }

  return (
    <>
      <Select name="category" defaultValue={event?.categoryId || ""}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => {
            if (category) {
              return (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
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
