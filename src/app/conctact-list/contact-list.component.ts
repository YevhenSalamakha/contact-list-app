import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { Contact } from "../interfaces/contact.interface";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnInit, OnDestroy {
  public contactList: Contact[] = [];
  public searchControl: FormControl = new FormControl("");
  public searchString!: string;
  private filterFormSubsription!: Subscription;

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactList = this.contactService.getContactList();
    this.initControlSubscribtion();
  }

  public initControlSubscribtion(): void {
    this.filterFormSubsription = this.searchControl.valueChanges.subscribe(
      (value) => {
        this.searchString = value;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.filterFormSubsription) {
      this.filterFormSubsription.unsubscribe();
    }
  }
}
