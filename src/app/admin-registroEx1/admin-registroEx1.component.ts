import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuServicio } from '../menu/menu.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { mimeType } from '../mime-type.validator';

@Component({
  templateUrl: './admin-registroEx1.component.html',
  styleUrls: ['./admin-registroEx1.component.scss'],
})
export class AdminRegistroEx1Component implements OnInit {
    public texto: string = 'Registro Extemporáneo';
    form: FormGroup;
    imagePreview: string;
    public constructor(
      private menuServicio : MenuServicio,
      private authService: AuthService
      ) {}


    ngOnInit() {
      this.menuServicio.actualizarHeaderMenu(this.texto);
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
          validators: [Validators.required, Validators.minLength(3)]
        }),
        facultad: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        telefono: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        email: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        password: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
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

    onSignUp() {
      this.authService.createUserAlumno(
        this.form.value.name,
        this.form.value.apePaterno,
        this.form.value.apeMaterno,
        this.form.value.matricula,
        this.form.value.facultad,
        this.form.value.telefono,
        this.form.value.email,
        this.form.value.password,
        this.form.value.image
        );
    }
}
