import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { AgendamentoConsultaService } from '../agendamentoConsulta.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  medicos: any
  horarios: any = ['08','09','10','11','12','13','14','15','16','17','18']
  nomesMedicos: any = []
  datasDisponiveis = []
  agenda: any

  checkoutForm = this.formBuilder.group({
    codigo: '',
    paciente: '',
    nome: '',
    data: '',
    especialidade: '',
    horario: '',
    nomeMedico: ''
  });

  constructor(
    private formBuilder: FormBuilder, private agendamentoConsultaService: AgendamentoConsultaService, private agendamento: AgendamentoService
  ) { }

  ngOnInit() {

    this.agendamentoConsultaService.buscarMedicos().subscribe({
      next: (res) => {
        this.medicos = res
      },
      error: (e) => {
        alert("algo deu errado4");
      }
    })


    this.agendamentoConsultaService.buscarAgenda().subscribe({
      next: (res) => {
        console.log(res)
        this.agenda = res
      },
      error: (e) => {
        alert("algo deu errado3");
      }
    })
  }

  updateNome() {
    this.medicos.forEach((res) => {
      if (res.especialidade == this.checkoutForm.value.especialidade) {
        this.nomesMedicos.push(res.pessoa.pessoa.nome)
        this.checkoutForm.value.codigo = res.pessoa.pessoa.codigo
      }
    })
  }

  updateDate() {
    this.medicos = []
    this.datasDisponiveis = [8, 9, 10, 11, 12, 13, 14, 15]
    this.medicos.forEach((res) => {
      if (res.especialidade == this.checkoutForm.value.especialidade) {
        this.nomesMedicos.push(res.pessoa.pessoa.nome)
      }
    })

  }

  onSubmit(): void {
    console.log(this.checkoutForm.value)

    this.medicos.forEach((res) => {
      console.log(res)
      console.log(this.checkoutForm.value)
      if (res.especialidade == this.checkoutForm.value.especialidade && res.pessoa.pessoa.nome == this.checkoutForm.value.nomeMedico) {
        this.checkoutForm.value.codigo = res.pessoa.pessoa.codigo
      }
    })

    this.agendamento.cadastrarAgendamento(this.checkoutForm.value)
      .subscribe({
        next: (res) => {
          alert("salvo com sucesso!");
          this.checkoutForm.reset();
        },
        error: (e) => {
          alert("algo deu errado, favor verificar os dados!");
          this.checkoutForm.reset();
        },
      });
  }
}
