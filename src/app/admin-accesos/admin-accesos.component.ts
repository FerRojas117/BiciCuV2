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

  templateUrl: './admin-accesos.component.html',
  styleUrls: ['./admin-accesos.component.scss'],
})
<<<<<<< HEAD
export class AdminAccesosComponent {
||||||| merged common ancestors
export class AdminAccesos {
=======
export class AdminAccesos implements OnInit{
  public constructor(private menuServicio: MenuServicio ) {
>>>>>>> Valeria

  }
  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Control de accesos');
  }
}
