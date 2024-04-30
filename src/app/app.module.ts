import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule {}
