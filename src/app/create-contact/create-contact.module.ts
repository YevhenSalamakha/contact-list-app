import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CreateContactRoutingModule } from "./create-contact-routing.module";
import { CreateContactComponent } from "./create-contact.component";

@NgModule({
  declarations: [CreateContactComponent],
  imports: [
    CommonModule,
    CreateContactRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CreateContactComponent],
})
export class CreateContactModule {}
