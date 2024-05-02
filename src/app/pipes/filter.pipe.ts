import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../interfaces/contact.interface";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(data: Contact[], searchString: string): any[] {
    if (!searchString || searchString.trim() === "") {
      return data;
    }

    const filterValue = searchString.toLowerCase().trim();
    return data.filter((item) => {
      const values = Object.values(item).join(" ").toLowerCase();
      return values.includes(filterValue);
    });
  }
}
