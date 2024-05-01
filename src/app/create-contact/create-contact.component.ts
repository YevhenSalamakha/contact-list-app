import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Contact } from "../interfaces/contact.interface";
import { ContactsService } from "../services/contacts.service";
import { phoneNumberValidator } from "../utils/custom.validators";

@Component({
  selector: "app-create-contact",
  templateUrl: "./create-contact.component.html",
  styleUrls: ["./create-contact.component.scss"],
})
export class CreateContactComponent implements OnInit {
  public contactForm: FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    phoneNumber: ["", [Validators.required, phoneNumberValidator()]],
    homeAddress: ["", [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {}

  public submit(): void {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.controls["firstName"].value as string,
      lastName: this.contactForm.controls["lastName"].value as string,
      phoneNumber: this.contactForm.controls["phoneNumber"].value as string,
      homeAddress: this.contactForm.controls["homeAddress"].value as string,
    };

    if (this.contactForm.valid) {
      this.contactService.createContact(newContact);
    }
  }

  public onCancel(): void {
    this.router.navigateByUrl("contact-list");
  }
}
