import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  public setDataToLocaleStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItemFromLocaleStorage(key: string) {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }
}
