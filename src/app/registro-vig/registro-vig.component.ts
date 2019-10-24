import { Component, OnInit } from '@angular/core';
import { MenuServicio } from '../menu/menu.service';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from '../mime-type.validator';

/*
 * Esta clase recoge la información de registro-vig.component.html
 * del formulario, y en el método ngOnInit se inicializan los campos
 * que contendrá el formulario, se le pueden agregar acciones con
 * Validators, como Validators.required que indica un campo obligatorio
 *
 */
@Component({
  templateUrl: './registro-vig.component.html',
  styleUrls: ['./registro-vig.component.scss'],
})
export class RegistroVigComponent  implements  OnInit{

  form: FormGroup;
  imagePreview: string;
  // en el constructor se instancia un objeto de la clase Inyectable
  // AuthService, en este caso, authService
  public constructor(
    private menuServicio: MenuServicio,
    private authService: AuthService
    ) { }


  ngOnInit() {
    this.menuServicio.actualizarHeaderMenu('Registro de Vigilantes');
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      apePaterno: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      apeMaterno: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      matricula: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(9)]
      }),
      acceso: new FormControl(null, {
        validators: [Validators.required]
      }),
      telefono: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      clave: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      contrasena: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
           asyncValidators: [mimeType]
      }),
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
// en este método se manda la información al servicio de authservice mediante
// su objeto, para crear un nuevo Vigilante
  onSignUp() {
    console.log(this.form.value.name +  '' + this.form.value.contrasena);
    this.authService.createUserVigilante(
      this.form.value.name,
      this.form.value.apePaterno,
      this.form.value.apeMaterno,
      this.form.value.matricula,
      this.form.value.acceso,
      this.form.value.clave,
      this.form.value.image,
      this.form.value.telefono,
      this.form.value.email,
      this.form.value.contrasena,
      );
  }

}
