import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { ButtonComponent } from "./design-system/button/button.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, SplashScreenComponent, ButtonComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
