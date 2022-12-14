import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-listar-meus-agendamentos',
  templateUrl: './listar-meus-agendamentos.component.html',
  styleUrls: ['./listar-meus-agendamentos.component.css']
})
export class ListarMeusAgendamentosComponent implements OnInit {

  ItemsArray = []

  UsuarioLogado: any

  constructor(private agendamentoService: AgendamentoService) {

    this.agendamentoService.findAll().subscribe((res) => {
      this.UsuarioLogado = this.agendamentoService.getUsuarioLogado()
      console.log(this.UsuarioLogado)
      console.log(res)
      res.forEach((element) => {
        console.log(element)
        console.log(this.UsuarioLogado)
        if (element.medico.pessoa.pessoa.email == this.UsuarioLogado.email && element.medico.pessoa.senha == this.UsuarioLogado.senha) {
          console.log('1')
          this.ItemsArray.push(element);
        }
      });
      console.log('t', this.ItemsArray)
    });
  }

  ngOnInit(): void {
  }

}
