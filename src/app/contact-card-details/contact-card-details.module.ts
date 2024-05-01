import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactCardDetailsRoutingModule } from "./contact-card-details-routing.module";
import { ContactCardDetailsComponent } from "./contact-card-details.component";

@NgModule({
  declarations: [ContactCardDetailsComponent],
  imports: [CommonModule, ContactCardDetailsRoutingModule],
  exports: [ContactCardDetailsComponent],
})
export class ContactCardDetailsModule {}
