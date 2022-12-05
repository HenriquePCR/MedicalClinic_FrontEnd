import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NovoEnderecoService } from "../services/novoEndereco.service";

@Component({
  selector: "app-services-page",
  templateUrl: "./services-page.component.html",
  styleUrls: ["./services-page.component.css"],
})
export class ServicesPageComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private novoEnderecoService: NovoEnderecoService
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    this.novoEnderecoService
      .cadastrarEndereco(this.checkoutForm.value)
      .subscribe({
        next: (res) => {
          alert("salvo com sucesso!");
          this.checkoutForm.reset();
        },
        error: (e) => {
          alert("algo deu errado, favor verificar os dados!");
        },
      });
  }
}
