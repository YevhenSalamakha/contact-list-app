import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule],
  exports: [CommonModule, RouterModule, HeaderComponent],
})
export class CoreModule {}
