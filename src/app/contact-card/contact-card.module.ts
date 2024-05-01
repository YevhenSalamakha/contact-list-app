import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ContactCardComponent } from "./contact-card.component";

@NgModule({
  declarations: [ContactCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [ContactCardComponent],
})
export class ContactCardModule {}
