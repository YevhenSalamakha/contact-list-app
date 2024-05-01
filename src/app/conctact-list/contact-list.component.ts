import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Contact } from "../interfaces/contact.interface";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnInit {
  public contactList: Contact[] = [];
  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactList = this.contactService.getContactList();
  }
}
