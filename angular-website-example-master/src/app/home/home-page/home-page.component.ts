import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit() {
  }

}
