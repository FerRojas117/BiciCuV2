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
  templateUrl: './admin-registroEx1.component.html',
  styleUrls: ['./admin-registroEx1.component.scss'],
})
<<<<<<< HEAD
export class AdminRegistroEx1Component {
||||||| merged common ancestors
export class AdminRegistroEx1 {
=======
export class AdminRegistroEx1 implements OnInit {
    public texto: string = 'Registro Extemporáneo';
    public constructor(private menuServicio : MenuServicio) {
    }
>>>>>>> Valeria

    ngOnInit() {
      this.menuServicio.actualizarHeaderMenu(this.texto);
    }
}
