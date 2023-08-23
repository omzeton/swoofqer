import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SplashScreenComponent } from "./views/splash-screen/splash-screen.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { CourseComponent } from "./views/course/course.component";
import { SettingsComponent } from "./views/settings/settings.component";
import { ProgressComponent } from "./views/progress/progress.component";
import { CreateComponent } from "./views/create/create.component";
import { AppLogoComponent } from "./svgs/app-logo/app-logo.component";
import { QuizOneComponent } from "./game/quiz-one/quiz-one.component";
import { QuizTwoComponent } from './game/quiz-two/quiz-two.component';
import { QuizThreeComponent } from './game/quiz-three/quiz-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashScreenComponent,
    DashboardComponent,
    CourseComponent,
    SettingsComponent,
    ProgressComponent,
    CreateComponent,
    AppLogoComponent,
    QuizOneComponent,
    QuizTwoComponent,
    QuizThreeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
