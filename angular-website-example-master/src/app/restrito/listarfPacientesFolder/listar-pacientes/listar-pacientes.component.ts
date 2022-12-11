import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../services/pacientes.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  ItemsArray: any[] = [];

  constructor(private pacientesService: PacientesService) {
    this.pacientesService.findAll().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }

  ngOnInit(): void {
  }

}