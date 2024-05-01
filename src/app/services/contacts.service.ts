import { Injectable } from "@angular/core";
import { Contact } from "../interfaces/contact.interface";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
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

  constructor() {}

  public getContactList(): Contact[] {
    return this.contactList;
  }
}
