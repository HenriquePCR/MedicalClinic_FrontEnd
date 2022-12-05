import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NovoPacienteService } from "../../../services/novoPaciente.service"

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private novoPacienteService: NovoPacienteService
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    this.novoPacienteService
      .cadastrarPaciente(this.checkoutForm.value)
      .subscribe({
        next: (res) => {
          alert("salvo com sucesso!");
          this.checkoutForm.reset();
        },
        error: (e) => {
          alert("algo deu errado1, favor verificar os dados!");
        },
      });
  }
}
