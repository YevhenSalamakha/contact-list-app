import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateContactComponent } from "./create-contact.component";

const routes: Routes = [{ path: "", component: CreateContactComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateContactRoutingModule {}
