import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactCardModule } from "../contact-card/contact-card.module";
import { ContactListRoutingModule } from "./contact-list-routing.module";
import { ContactListComponent } from "./contact-list.component";

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule, ContactCardModule, ContactListRoutingModule],
  exports: [ContactListComponent],
})
export class ContactListModule {}
