import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser'



import { ListarMeusAgendamentosRouterModule } from "./listarMeusAgendamentos-routing.module";
import { ListarMeusAgendamentosComponent } from "./listar-meus-agendamentos.component";

@NgModule({
  declarations: [ListarMeusAgendamentosComponent],
  imports: [
    CommonModule,
    ListarMeusAgendamentosRouterModule,
    ReactiveFormsModule,
  ],
})
export class ListarMeusAgendamentosModule { }
