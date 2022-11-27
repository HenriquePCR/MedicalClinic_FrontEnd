import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../services/menuService.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {

  @Input() menuOpen: boolean;
  @Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();

  menu: { id: number; title: string; link: string }[];

  constructor(private menuService: MenuService) {
    this.menuService.getMenu().subscribe(setting => {
      this.menu = setting;
      console.log(this.menu);
    })
    // this.menu = menuService.getMenu();
  }

  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }

}
