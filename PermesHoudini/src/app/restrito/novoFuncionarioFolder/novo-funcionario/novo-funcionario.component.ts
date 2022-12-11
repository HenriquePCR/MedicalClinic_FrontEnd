import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NovoFuncionarioService } from "../../../services/novoFuncionario.service"

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    dataContrato: '',
    salario: '',
    senhaHash: '',
    nome: '',
    email: '',
    telefone: '',
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    crm: "",
    especialidade: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private novoFuncionarioService: NovoFuncionarioService
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    this.novoFuncionarioService
      .cadastrarFuncionario(this.checkoutForm.value)
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

  openMedicosInput(){

    var checkBox = document.getElementById("mycheckbox") as HTMLInputElement | null;

    var crm = document.getElementById("crm");
    var especialidade = document.getElementById("especialidade");
    console.log('entrou')
    if (checkBox.checked == true){
      crm.style.display = "block";
      especialidade.style.display = "block";
    } else {
      crm.style.display = "none";
      especialidade.style.display = "none";
    }

  }
}
