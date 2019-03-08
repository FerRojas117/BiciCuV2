import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service'
@Component({
  templateUrl: './admin-registroEx2.component.html',
  styleUrls: ['./admin-registroEx2.component.scss'],
})
export class AdminRegistroEx2 implements OnInit{
  public constructor ( private menuServicio: MenuServicio) {

  }

  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('REGISTRO EXTEMPORANEO 2')
  }
}
