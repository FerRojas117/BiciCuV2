import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
@Component({

  templateUrl: './admin-accesos.component.html',
  styleUrls: ['./admin-accesos.component.scss'],
})
export class AdminAccesos implements OnInit{
  public constructor(private menuServicio: MenuServicio ) {

  }
  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Control de accesos');
  }
}
