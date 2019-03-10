import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
@Component({
  templateUrl: './admin-export.component.html',
  styleUrls: ['./admin-export.component.scss'],
})
export class AdminExportComponent implements OnInit {

  public constructor(private menuServicio: MenuServicio) {

  }

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Exportar Datos');
  }
}
