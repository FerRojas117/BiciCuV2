import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuServicio } from './menu.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnDestroy{
  texto = 'MENU';
  subscription: Subscription;

  public constructor(private menuServicio: MenuServicio) {
    this.subscription  = this.menuServicio.obtenerActualizacion().subscribe((texto) => {
      this.texto = texto;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
