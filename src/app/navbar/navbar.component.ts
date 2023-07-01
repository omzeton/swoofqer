import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

interface ServerTestRes {
  status: string;
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  serverTest: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchServerStatus();
  }

  private fetchServerStatus() {
    this.http.get<ServerTestRes>("http://localhost:8000/").subscribe((res) => {
      this.serverTest = !!res.status;
    });
  }
}
