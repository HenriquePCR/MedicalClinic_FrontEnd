import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { ListarMeusAgendamentosRouterModule } from "./listarMeusAgendamentos-routing.module";
import { ListarMeusAgendamentosComponent } from "./listar-meus-agendamentos.component";

@NgModule({
  declarations: [ListarMeusAgendamentosComponent],
  imports: [CommonModule, ListarMeusAgendamentosRouterModule, ReactiveFormsModule],
})
export class ListarMeusAgendamentosModule { }
