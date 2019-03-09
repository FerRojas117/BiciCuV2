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
  templateUrl: './admin-registroEx2.component.html',
  styleUrls: ['./admin-registroEx2.component.scss'],
})
<<<<<<< HEAD
export class AdminRegistroEx2Component {
||||||| merged common ancestors
export class AdminRegistroEx2 {
=======
export class AdminRegistroEx2 implements OnInit{
  public constructor ( private menuServicio: MenuServicio) {

  }
>>>>>>> Valeria

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Registro Extemporáneo')
  }
}
