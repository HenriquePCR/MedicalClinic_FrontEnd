import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../../services/enderecos.service';

@Component({
  selector: 'app-listar-enderecos',
  templateUrl: './listar-enderecos.component.html',
  styleUrls: ['./listar-enderecos.component.css']
})
export class ListarEnderecosComponent implements OnInit {
  ItemsArray: any[] = [];

  constructor(private enderecoService: EnderecoService) {
    this.enderecoService.findAll().subscribe((res: any[]) => {
      console.log(res)
      this.ItemsArray = res;
    });
  }

  ngOnInit(): void {
  }

}
