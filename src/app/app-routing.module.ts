import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { CourseComponent } from "./views/course/course.component";
import { SettingsComponent } from "./views/settings/settings.component";
import { ProgressComponent } from "./views/progress/progress.component";
import { CreateComponent } from "./views/create/create.component";
import { SplashScreenComponent } from "./views/splash-screen/splash-screen.component";
import { QuizOneComponent } from "./game/quiz-one/quiz-one.component";
import { QuizTwoComponent } from "./game/quiz-two/quiz-two.component";
import { QuizThreeComponent } from "./game/quiz-three/quiz-three.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "course/:id", component: CourseComponent },
  { path: "settings", component: SettingsComponent },
  { path: "progress", component: ProgressComponent },
  { path: "create", component: CreateComponent },
  { path: "game-1", component: QuizOneComponent },
  { path: "game-2", component: QuizTwoComponent },
  { path: "game-3", component: QuizThreeComponent },
  { path: "", component: SplashScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
