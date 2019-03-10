import { Component, OnInit } from '@angular/core';
import { MenuServicio } from '../menu/menu.service'

@Component({
  templateUrl: './registro-vig.component.html',
  styleUrls: ['./registro-vig.component.scss'],
})
export class RegistroVigComponent  implements  OnInit{
  public constructor(private menuServicio: MenuServicio) { }
  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu("Registro de Vigilantes")
  }
}
