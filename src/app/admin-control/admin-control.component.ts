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
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.scss'],
})
<<<<<<< HEAD
export class AdminControlComponent {
||||||| merged common ancestors
export class AdminControl {
=======
export class AdminControl implements OnInit{
  public constructor( private menuServicio: MenuServicio) { }
>>>>>>> Valeria

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Control de Bicicletas');
  }
}
