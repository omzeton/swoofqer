import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ServerTestRes } from "src/types";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  menuIsOpen = false;
  serverTest = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchServerStatus();
  }

  private fetchServerStatus() {
    this.http.get<ServerTestRes>("http://localhost:8000/").subscribe((res) => {
      this.serverTest = !!res.status;
    });
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
