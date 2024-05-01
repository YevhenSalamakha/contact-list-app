import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Contact } from "../../interfaces/contact.interface";
import { ContactsService } from "../../services/contacts.service";
import { phoneNumberValidator } from "../../utils/custom.validators";

@Component({
  selector: "app-edit-contact-card-dialog",
  templateUrl: "./edit-contact-card-dialog.component.html",
  styleUrls: ["../../create-contact/create-contact.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditContactCardDialogComponent {
  public updateForm: FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    phoneNumber: ["", [Validators.required, phoneNumberValidator()]],
    homeAddress: ["", [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    public dialogRef: MatDialogRef<EditContactCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {
    if (data) {
      this.updateForm.patchValue(data);
    }
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    if (this.updateForm.valid) {
      const updateContact: Contact = {
        id: this.data.id,
        firstName: this.updateForm.controls["firstName"].value as string,
        lastName: this.updateForm.controls["lastName"].value as string,
        phoneNumber: this.updateForm.controls["phoneNumber"].value as string,
        homeAddress: this.updateForm.controls["homeAddress"].value as string,
      };

      this.contactsService.updateContact(updateContact);
      this.dialogRef.close();
    }
  }
}
