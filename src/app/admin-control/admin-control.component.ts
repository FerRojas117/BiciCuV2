import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
@Component({
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.scss'],
})
export class AdminControl implements OnInit{
  public constructor( private menuServicio: MenuServicio) { }

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Control de Bicicletas');
  }
}
