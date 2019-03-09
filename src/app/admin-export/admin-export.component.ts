<<<<<<< HEAD
import { Component } from '@angular/core';

||||||| merged common ancestors
import { Component } from '@angular/core';
import { AdminMenu } from '../admin-menu/admin-menu.component';

=======
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
>>>>>>> Valeria
@Component({
  templateUrl: './admin-export.component.html',
  styleUrls: ['./admin-export.component.scss'],
})
<<<<<<< HEAD
export class AdminExportComponent {
||||||| merged common ancestors
export class AdminExport {
=======
export class AdminExport implements OnInit {

  public constructor(private menuServicio: MenuServicio) {

  }
>>>>>>> Valeria

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Exportar Datos');
  }
}
