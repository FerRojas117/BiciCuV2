import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  form: FormGroup;

  constructor( private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      matricula: new FormControl( null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      password: new FormControl( null, {
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  onLogin() {
    this.authService.loginAlumno(
      this.form.value.matricula,
      this.form.value.password
    );
  }

}
