import { Component } from "@angular/core";
import { Course } from "src/types";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  loadingCourses = false;
  coursesList: Course[] = [];
}
