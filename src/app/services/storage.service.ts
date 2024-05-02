import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  public initLocaleStorageValue(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setItemToLocaleStorage(key: string, value: any): void {
    let storageContactList = this.getItemFromLocaleStorage(key);

    if (Array.isArray(storageContactList)) {
      storageContactList.push(value);

      localStorage.setItem(key, JSON.stringify(storageContactList));
    }
  }

  public getItemFromLocaleStorage(key: string) {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  public updateItemInLocaleStorage(key: string, value: any): void {
    let storageContactList = this.getItemFromLocaleStorage(key);

    if (Array.isArray(storageContactList)) {
      storageContactList = storageContactList.filter((item: any) => {
        return item.id !== value.id;
      });
    }

    storageContactList.push(value);
    this.clearLocaleStorage(key);
    this.initLocaleStorageValue(key, storageContactList);
  }

  public clearLocaleStorage(key: string): void {
    localStorage.removeItem(key);
  }

  public deleteItemFromLocaleStorage(key: string, index: number): void {
    let storageContactList = this.getItemFromLocaleStorage(key);

    storageContactList.splice(index, 1);
    this.clearLocaleStorage(key);
    this.initLocaleStorageValue(key, storageContactList);
  }
}
