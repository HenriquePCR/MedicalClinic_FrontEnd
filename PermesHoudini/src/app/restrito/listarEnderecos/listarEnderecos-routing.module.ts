import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEnderecosComponent } from "./listar-Enderecos/listar-enderecos.component";

const routes: Routes = [{
  path: '',
  component: ListarEnderecosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarEnderecoRoutingModule { }
