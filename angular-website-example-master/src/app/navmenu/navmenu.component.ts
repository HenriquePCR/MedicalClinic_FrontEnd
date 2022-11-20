import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {

  @Input() menuOpen: boolean;
  @Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();

  menu = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "Agendamento", link: "/agendamento" },
    { id: 3, title: "Novo Endereço", link: "/novoEndereco" },
    { id: 4, title: "Gallery", link: "/gallery" },
    { id: 5, title: "Log in", link: "/logIn" },
  ];
  constructor() { }

  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }

}
