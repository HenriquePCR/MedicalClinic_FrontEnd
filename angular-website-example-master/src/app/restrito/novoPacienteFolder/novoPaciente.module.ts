import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { NovoPacienteRoutingModule } from "./novoPaciente-routing.module";
import { NovoPacienteComponent } from "./novo-paciente/novo-paciente.component";

@NgModule({
  declarations: [NovoPacienteComponent],
  imports: [CommonModule, NovoPacienteRoutingModule, ReactiveFormsModule],
})
export class NovoPacienteModule { }
