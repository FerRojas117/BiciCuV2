import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
@Component({
  templateUrl: './admin-registroEx1.component.html',
  styleUrls: ['./admin-registroEx1.component.scss'],
})
export class AdminRegistroEx1Component implements OnInit {
    public texto: string = 'Registro Extemporáneo';
    public constructor(private menuServicio : MenuServicio) {
    }

    ngOnInit() {
      this.menuServicio.actualizarHeaderMenu(this.texto);
    }
}
