import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-gallery-page",
  templateUrl: "./gallery-page.component.html",
  styleUrls: ["./gallery-page.component.css"],
})
export class GalleryPageComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit() {
  }

}
