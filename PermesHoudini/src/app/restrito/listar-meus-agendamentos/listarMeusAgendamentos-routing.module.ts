import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMeusAgendamentosComponent } from "./listar-meus-agendamentos.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [{
  path: '',
  component: ListarMeusAgendamentosComponent
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarMeusAgendamentosRouterModule { }
