import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../../app/services/agendamento.service';

@Component({
  selector: 'app-listar-todos-agendamentos',
  templateUrl: './listar-todos-agendamentos.component.html',
  styleUrls: ['./listar-todos-agendamentos.component.css']
})
export class ListarTodosAgendamentosComponent implements OnInit {

  ItemsArray: any[] = [];

  constructor(private agendamentoService: AgendamentoService) {
    this.agendamentoService.findAll().subscribe((res: any[]) => {
      console.log(res)
      this.ItemsArray = res;
    });
   }

  ngOnInit(): void {
  }

}
