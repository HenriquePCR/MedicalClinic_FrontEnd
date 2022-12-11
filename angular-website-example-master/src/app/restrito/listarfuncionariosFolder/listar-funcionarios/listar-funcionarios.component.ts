import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../../services/funcionario.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {
  ItemsArray: any[] = [];

  constructor(private funcionarioService: FuncionarioService) {
    this.funcionarioService.findAll().subscribe((res: any[]) => {
      console.log(res)
      this.ItemsArray = res;
    });
  }

  ngOnInit(): void {
  }

}
