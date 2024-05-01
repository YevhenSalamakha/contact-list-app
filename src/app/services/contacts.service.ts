import { Injectable } from "@angular/core";
import { Contact } from "../interfaces/contact.interface";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  public extraDetailsCard!: Contact;
  public contactList: Contact[] = [
    {
      id: 1,
      firstName: "Slavik",
      lastName: "Bandura",
      phoneNumber: "000-111-2222",
      homeAddress: "shevchenka 12/6",
    },

    {
      id: 2,
      firstName: "Yuriy",
      lastName: "Bondarenko",
      phoneNumber: "312-114-256",
      homeAddress: "kalnyshevskogo 11/3",
    },

    {
      id: 3,
      firstName: "Igor",
      lastName: "Smalets",
      phoneNumber: "412-333-1662",
      homeAddress: "horodotska 250/20",
    },
  ];

  constructor(private storageService: StorageService) {
    this.storageService.setDataToLocaleStorage("contactList", this.contactList);
  }

  public getContactList(): Contact[] {
    return this.contactList;
  }

  public getExtraDetailsCard(): Contact {
    return this.extraDetailsCard;
  }

  public createContact(newContact: Contact): void {
    const highestId = Math.max(
      ...this.contactList.map((contact) => contact.id),
      0
    );

    this.contactList.push({
      id: highestId + 1,
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      phoneNumber: newContact.phoneNumber,
      homeAddress: newContact.homeAddress,
    });

    this.storageService.setDataToLocaleStorage("newContact", newContact);
  }

  public updateContact(updatedContact: Contact): void {
    const index = this.findContactIndex(updatedContact);

    this.contactList[index].firstName = updatedContact.firstName;
    this.contactList[index].lastName = updatedContact.lastName;
    this.contactList[index].phoneNumber = updatedContact.phoneNumber;
    this.contactList[index].homeAddress = updatedContact.homeAddress;

    this.storageService.setDataToLocaleStorage(
      "updatedContact",
      updatedContact
    );
  }

  public deleteContact(contactToDelete: Contact): void {
    const index = this.findContactIndex(contactToDelete);

    this.contactList.splice(index, 1);
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
