import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMeusAgendamentosComponent } from "./listar-meus-agendamentos.component";

const routes: Routes = [{
  path: '',
  component: ListarMeusAgendamentosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarMeusAgendamentosRouterModule { }