import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";

interface ServerTestRes {
  status: string;
}

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"],
})
@Injectable()
export class SplashScreenComponent implements OnInit {
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
