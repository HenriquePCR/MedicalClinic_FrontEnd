import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {
  ItemsArray: any[] = [];

  constructor(private pacienteService:PacienteService) {
    this.pacienteService.findAll().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
   }

  ngOnInit(): void {
  }

}
