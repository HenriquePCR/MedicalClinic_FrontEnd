import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.css"],
})
export class AboutPageComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
  }
}
