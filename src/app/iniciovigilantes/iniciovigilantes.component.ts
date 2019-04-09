import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
@Component({
  templateUrl: './iniciovigilantes.component.html',
  styleUrls: ['./iniciovigilantes.component.scss']
})
export class InicioVigilantesComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup( {
      clave: new FormControl( null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      contrasena: new FormControl( null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      acceso: new FormControl( null, {
        validators: [Validators.required]
      }),
    });
  }

  onLogin() {
    this.authService.loginVigilante(
      this.form.value.clave,
      this.form.value.contrasena,
      this.form.value.acceso
    );
  }
}
