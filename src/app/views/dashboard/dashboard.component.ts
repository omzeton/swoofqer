import { HttpClient } from "@angular/common/http";
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCourses();
  }

  private fetchCourses() {
    this.loadingCourses = true;
    this.http.get<Course[]>("http://localhost:8000/courses").subscribe((res) => {
      this.coursesList = res;
      this.loadingCourses = false;
    });
  }
}
