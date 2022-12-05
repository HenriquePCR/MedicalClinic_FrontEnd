import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { NovoFuncionarioRoutingModule } from "./novoFuncionario-routing.module";
import { NovoFuncionarioComponent } from "./novo-funcionario/novo-funcionario.component";

@NgModule({
  declarations: [NovoFuncionarioComponent],
  imports: [CommonModule, NovoFuncionarioRoutingModule, ReactiveFormsModule],
})
export class NovoFuncionarioModule { }
