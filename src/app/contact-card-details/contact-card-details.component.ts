import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Contact } from "../interfaces/contact.interface";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "app-contact-card-details",
  templateUrl: "./contact-card-details.component.html",
  styleUrls: ["./contact-card-details.component.scss"],
})
export class ContactCardDetailsComponent implements OnInit {
  public extraDetailsCard!: Contact;

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.extraDetailsCard = this.contactsService.getExtraDetailsCard();
    if (this.extraDetailsCard === undefined) {
      this.router.navigateByUrl("contact-list");
    }
  }
}
