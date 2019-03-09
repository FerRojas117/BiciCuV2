import { Component, OnInit } from '@angular/core';
import { MenuServicio } from '../menu/menu.service'

@Component({
  templateUrl: './registro-vig.component.html',
  styleUrls: ['./registro-vig.component.scss'],
})
<<<<<<< HEAD
export class RegistroVigComponent {

}
||||||| merged common ancestors
export class RegistroVig {

}
=======
export class RegistroVig  implements  OnInit{
  public constructor(private menuServicio: MenuServicio) { }
  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu("Registro de Vigilantes")
  }
}
>>>>>>> Valeria
