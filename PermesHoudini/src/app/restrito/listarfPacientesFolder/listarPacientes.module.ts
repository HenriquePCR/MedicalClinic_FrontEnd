import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { ListarPacienteRoutingModule } from "./listarPacientes-routing.module";
import { ListarPacientesComponent } from "./listar-pacientes/listar-pacientes.component";

@NgModule({
  declarations: [ListarPacientesComponent],
  imports: [CommonModule, ListarPacienteRoutingModule, ReactiveFormsModule],
})
export class ListarPacientesModule { }
