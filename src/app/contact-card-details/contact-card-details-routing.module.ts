import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactCardDetailsComponent } from "./contact-card-details.component";

const routes: Routes = [{ path: "", component: ContactCardDetailsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactCardDetailsRoutingModule {}
