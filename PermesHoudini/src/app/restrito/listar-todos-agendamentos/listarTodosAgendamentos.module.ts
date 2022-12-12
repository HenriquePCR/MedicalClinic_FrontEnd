import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { ListarTodosAgendamentosRouterModule } from "./listarTodosAgendamentos-routing.module";
import { ListarTodosAgendamentosComponent } from "./listar-todos-agendamentos.component";

@NgModule({
  declarations: [ListarTodosAgendamentosComponent],
  imports:  [ListarTodosAgendamentosRouterModule, ReactiveFormsModule, CommonModule],
})
export class ListarTodosAgendamentosModule { }
