import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { LoginService } from "../login.service";
import { MenuService } from "src/app/services/menuService.service";
import { AgendamentoService } from "src/app/services/agendamento.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-testimonial-page",
  templateUrl: "./testimonial-page.component.html",
  styleUrls: ["./testimonial-page.component.css"],
})
export class TestimonialPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: "",
    senha: "",
  });

  dados: any

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private menuService: MenuService,
    private router: Router,
    private agendamentoService: AgendamentoService
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    this.dados = this.loginForm.value
    this.loginService.loginSistema(this.loginForm.value).subscribe({
      next: (res) => {
        alert("Bem vindo de volta!");
        console.log(this.dados)
        this.agendamentoService.addUsuarioLogado(this.dados)
         this.menuService.setMenu();
        this.router.navigate(['/novoFuncionario']);
        this.loginForm.reset();
      },
      error: (e) => alert("Você não é um usuário do sistema!"),
    });

    this.loginForm.reset();
  }
}
