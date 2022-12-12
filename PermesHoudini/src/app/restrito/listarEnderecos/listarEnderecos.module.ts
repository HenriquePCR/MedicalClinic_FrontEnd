import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { ListarEnderecoRoutingModule } from "./listarEnderecos-routing.module";
import { ListarEnderecosComponent } from "./listar-enderecos.component";

@NgModule({
  declarations: [ListarEnderecosComponent],
  imports: [CommonModule, ListarEnderecoRoutingModule, ReactiveFormsModule],
})
export class ListarEnderecoModule { }
