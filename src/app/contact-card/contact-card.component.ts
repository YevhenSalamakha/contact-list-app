import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { EditContactCardDialogComponent } from "../dialogs/edit-contact-card-dialog/edit-contact-card-dialog.component";
import { Contact } from "../interfaces/contact.interface";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "app-contact-card",
  templateUrl: "./contact-card.component.html",
  styleUrls: ["./contact-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardComponent implements OnInit, OnDestroy {
  @Input()
  contactCardInfo!: Contact;
  private filterFormSubsription!: Subscription;

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public editContactCard(contactToEdit: Contact, event: Event): void {
    event.stopPropagation();

    const dialogRef = this.dialog.open(EditContactCardDialogComponent, {
      data: contactToEdit,
    });

    this.filterFormSubsription = dialogRef.afterClosed().subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  public deleteContactCard(contactToDelete: Contact) {
    this.contactsService.deleteContact(contactToDelete);
  }

  public openDetails(extraDetaildsContact: Contact, event: Event): void {
    event.stopPropagation();

    this.contactsService.findExtraDetailsCard(extraDetaildsContact);
    this.router.navigateByUrl("contact-details");
  }

  ngOnDestroy(): void {
    if (this.filterFormSubsription) {
      this.filterFormSubsription.unsubscribe();
    }
  }
}
