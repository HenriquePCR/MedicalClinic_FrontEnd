import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgendamentoConsultaService } from '../agendamentoConsulta.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  medicos: any
  nomesMedicos: any = []
  datasDisponiveis = []
  agenda: any

  checkoutForm = this.formBuilder.group({
    nome: '',
    data: '',
    especialidade: '',
    horario: ''
  });

  constructor(
    private formBuilder: FormBuilder, private agendamentoConsultaService: AgendamentoConsultaService
  ) { }

  ngOnInit() {

    this.agendamentoConsultaService.buscarMedicos().subscribe({
      next: (res) => {
        this.medicos = res
      },
      error: (e) => {
        alert("algo deu errado");
      }
     })


    this.agendamentoConsultaService.buscarAgenda().subscribe({
      next: (res) => {
        console.log(res)
        this.agenda = res
      },
      error: (e) => {
        alert("algo deu errado");
      }
     })
  }

  updateNome(){
    this.nomesMedicos = []
    this.medicos.forEach((res) => {
      if(res.especialidade == this.checkoutForm.value.especialidade){
        this.nomesMedicos.push(res.pessoa.pessoa.nome)
      }
    })
  }

  updateDate(){
    this.datasDisponiveis = [8,9,10,11,12,13,14,15]
    this.medicos.forEach((res) => {
      if(res.especialidade == this.checkoutForm.value.especialidade){
        this.nomesMedicos.push(res.pessoa.pessoa.nome)
      }
    })

  }

  onSubmit(): void {
    // Process checkout data here
    this.checkoutForm.reset();
  }
}
