import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";
import { FormBuilder } from '@angular/forms';
import { LoginService } from "../login.service";
import { MenuService } from "src/app/services/menuService.service";

@Component({
  selector: "app-testimonial-page",
  templateUrl: "./testimonial-page.component.html",
  styleUrls: ["./testimonial-page.component.css"],
})
export class TestimonialPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    senha: '',
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private menuService: MenuService) { }

  ngOnInit() {
  }

  onSubmit(): void {

    this.menuService.setMenu();

    // this.dataSharingService.isUserLoggedIn.next(true);

    // this.loginService.loginSistema(this.loginForm.value)
    //   .subscribe({
    //     next: (res) => {
    //       alert("Bem vindo de volta!");
    //       this.loginForm.reset();
    //     },
    //     error: (e) => alert("Você não é um usuário do sistema!")
    //   });

    this.loginForm.reset();
  }


}
