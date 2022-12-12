import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTodosAgendamentosComponent } from "./listar-todos-agendamentos.component";

const routes: Routes = [{
  path: '',
  component: ListarTodosAgendamentosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarTodosAgendamentosRouterModule { }
