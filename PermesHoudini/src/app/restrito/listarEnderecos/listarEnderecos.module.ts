import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { ListarEnderecoRoutingModule } from "./listarEnderecos-routing.module";
import { ListarEnderecosComponent } from "./listar-enderecos/listar-enderecos.component";

@NgModule({
  declarations: [ListarEnderecosComponent],
  imports: [CommonModule, ListarEnderecoRoutingModule, ReactiveFormsModule],
})
export class ListarEnderecoModule { }
