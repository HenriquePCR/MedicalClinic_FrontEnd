import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoFuncionarioComponent } from "./novo-funcionario/novo-funcionario.component";

const routes: Routes = [{
  path: '',
  component: NovoFuncionarioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoFuncionarioRoutingModule { }
