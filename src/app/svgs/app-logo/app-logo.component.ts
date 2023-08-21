import { Component, Input } from "@angular/core";

@Component({
  selector: "logo-icon",
  templateUrl: "./app-logo.svg",
})
export class AppLogoComponent {
  @Input() width: string = "";
  @Input() height: string = "";
  @Input() color: string = "#000000";
}
