import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { CourseComponent } from "./views/course/course.component";
import { SettingsComponent } from "./views/settings/settings.component";
import { ProgressComponent } from "./views/progress/progress.component";
import { CreateComponent } from "./views/create/create.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "course/:id", component: CourseComponent },
  { path: "settings", component: SettingsComponent },
  { path: "progress", component: ProgressComponent },
  { path: "create", component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
