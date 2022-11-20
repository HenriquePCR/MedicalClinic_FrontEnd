import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-testimonial-page",
  templateUrl: "./testimonial-page.component.html",
  styleUrls: ["./testimonial-page.component.css"],
})
export class TestimonialPageComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit() {
  }


}
