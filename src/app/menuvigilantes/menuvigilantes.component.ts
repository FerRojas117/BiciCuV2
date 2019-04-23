import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './menuvigilantes.component.html',
  styleUrls: ['./menuvigilantes.component.scss']
})
export class MenuVigilantesComponent {

  constructor(private authservice: AuthService) { }

  logout() {
    this.authservice.logout();
  }
}
