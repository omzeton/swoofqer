import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SplashScreenComponent } from "./views/splash-screen/splash-screen.component";
import { ButtonComponent } from "./design-system/button/button.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ViewContainerComponent } from "./views/view-container/view-container.component";
import { TextComponent } from './design-system/text/text.component';
import { IconButtonComponent } from './design-system/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashScreenComponent,
    ButtonComponent,
    DashboardComponent,
    ViewContainerComponent,
    TextComponent,
    IconButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
