import { Component, Input } from "@angular/core";

type Variant = "h1" | "p";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"],
})
export class TextComponent {
  @Input() variant: Variant = "p";
}
