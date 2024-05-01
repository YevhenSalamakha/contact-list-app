import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ContactCardComponent } from "./contact-card.component";

@NgModule({
  declarations: [ContactCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatDialogModule],
  exports: [ContactCardComponent],
})
export class ContactCardModule {}
