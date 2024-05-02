import { Injectable } from "@angular/core";
import { Contact } from "../interfaces/contact.interface";
import { contactList } from "./services.constants";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  public readonly contactList: Contact[] = contactList;
  public extraDetailsCard!: Contact;

  constructor(private storageService: StorageService) {
    this.storageService.initLocaleStorageValue("contactList", this.contactList);
  }

  public getContactList(): Contact[] {
    return this.contactList;
  }

  public getExtraDetailsCard(): Contact {
    return this.extraDetailsCard;
  }

  public createContact(newContact: Contact): void {
    let highestId: number = 0;

    this.contactList.forEach((contact) => {
      if (contact.id > highestId) {
        highestId = contact.id;
      }
    });

    this.contactList.push({
      id: ++highestId,
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      phoneNumber: newContact.phoneNumber,
      homeAddress: newContact.homeAddress,
    });

    newContact.id = highestId;
    this.storageService.setItemToLocaleStorage("contactList", newContact);
  }

  public updateContact(updatedContact: Contact): void {
    const index = this.findContactIndex(updatedContact);

    this.contactList[index].firstName = updatedContact.firstName;
    this.contactList[index].lastName = updatedContact.lastName;
    this.contactList[index].phoneNumber = updatedContact.phoneNumber;
    this.contactList[index].homeAddress = updatedContact.homeAddress;

    this.storageService.updateItemInLocaleStorage(
      "contactList",
      updatedContact
    );
  }

  public deleteContact(contactToDelete: Contact): void {
    const index = this.findContactIndex(contactToDelete);

    this.contactList.splice(index, 1);
    this.storageService.deleteItemFromLocaleStorage("contactList", index);
  }

  public findContactIndex(contactToFindIndex: Contact): number {
    return this.contactList.findIndex(
      (contact) => contact.id === contactToFindIndex.id
    );
  }

  public findExtraDetailsCard(extraDetaildsContact: Contact): void {
    const index = this.findContactIndex(extraDetaildsContact);
    this.extraDetailsCard = this.contactList[index];
  }
}
