import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ContactCardModule } from "../contact-card/contact-card.module";
import { FilterPipe } from "../pipes/filter.pipe";
import { ContactListRoutingModule } from "./contact-list-routing.module";
import { ContactListComponent } from "./contact-list.component";

@NgModule({
  declarations: [ContactListComponent, FilterPipe],
  imports: [
    CommonModule,
    ContactCardModule,
    ContactListRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [ContactListComponent],
})
export class ContactListModule {}
