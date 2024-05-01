import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactListComponent } from "./contact-list.component";

const routes: Routes = [{ path: "", component: ContactListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactListRoutingModule {}
