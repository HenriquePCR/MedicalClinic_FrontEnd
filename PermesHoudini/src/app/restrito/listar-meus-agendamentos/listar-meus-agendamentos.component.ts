import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-listar-meus-agendamentos',
  templateUrl: './listar-meus-agendamentos.component.html',
  styleUrls: ['./listar-meus-agendamentos.component.css']
})
export class ListarMeusAgendamentosComponent implements OnInit {

  ItemsArray: [{
    email: string,
    senha: string
  }]
  UsuarioLogado: any

  constructor(private agendamentoService: AgendamentoService) {
    this.agendamentoService.findAll().subscribe((res: {
      email: string,
      senha: string
    }) => {
      this.UsuarioLogado = this.agendamentoService.getUsuarioLogado()

      this.UsuarioLogado.forEach(element => {
        if(element.email == res.email && element.senha == res.senha){
          this.ItemsArray.push(element);
        }
      });
    });
   }

  ngOnInit(): void {
  }

}
