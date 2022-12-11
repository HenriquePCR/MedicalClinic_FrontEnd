import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { ListarFuncionarioRoutingModule } from "./listarFuncionarios-routing.module";
import { ListarFuncionariosComponent } from "./listar-funcionarios/listar-funcionarios.component";

@NgModule({
  declarations: [ListarFuncionariosComponent],
  imports: [CommonModule, ListarFuncionarioRoutingModule, ReactiveFormsModule],
})
export class ListarFuncionariosModule { }
