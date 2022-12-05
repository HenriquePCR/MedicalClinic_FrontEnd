import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoPacienteComponent } from "./novo-paciente/novo-paciente.component";

const routes: Routes = [{
  path: '',
  component: NovoPacienteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoPacienteRoutingModule { }
