import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "contact-list" },

  {
    path: "contact-list",
    loadChildren: () =>
      import("./conctact-list/contact-list.module").then(
        (m) => m.ContactListModule
      ),
  },

  {
    path: "create-contact",
    loadChildren: () =>
      import("./create-contact/create-contact.module").then(
        (m) => m.CreateContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
