import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SplashScreenComponent } from "./views/splash-screen/splash-screen.component";
import { ButtonComponent } from "./design-system/button/button.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashScreenComponent,
    ButtonComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
