import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "src/types";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent {
  course: Course | undefined = undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchCourseData();
  }

  private fetchCourseData() {
    const courseId = this.route.snapshot.paramMap.get("id");
    this.http.get<Course>(`http://localhost:8000/course/${courseId}`).subscribe((res) => {
      console.log({ res });
      this.course = res;
    });
  }
}
