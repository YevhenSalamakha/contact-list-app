import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, CoreModule],
})
export class DashboardModule {}
