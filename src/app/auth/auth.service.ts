import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { LogInAlumno } from './auth-data-Alumno.model';

/*
* Servicio que funciona para registro, y autenticación de usuarios
* Funciona de manera Injectable y se requiere instanciar un objeto
* de esta clase en el constructor de cualquier otra clase para
* utilizar sus métodos y obtener información de sus atributos privados
*/
@Injectable({ providedIn: 'root' })
export class AuthService {
  // roles de usuarios en BICICU 1=admin 2=vigilante 3=alumno

    private relRolIdVigilante = '2';
    private relRolIdAlumno = '3';
    private usuariosCol = 'prueba';
    private isAuthenticated = false;
    private token: string;
    private tokenTimer: any;
    private userId: string;
    private userType: string;
    private authStatusListener = new Subject<boolean>();
    private authUserTypeListener = new Subject<string>();
    constructor(private http: HttpClient, private router: Router ) {}

    // método para obtener token obtenido al iniciar sesiómn un usuario
    getToken() {
      return this.token;
    }
// método para obtener si uun usuario está auténticado
    getIsAuth() {
      return this.isAuthenticated;
    }
// método para obtener el tipo de usuario que inició sesión
    getUserType() {
      return this.userType;
    }
// método para obtener el ID de usuario que inició sesión
    getUserId() {
      return this.userId;
    }
// método que retorna el cambio de status de inicio de sesión (en cuanto haya uno)
    getAuthStatusListener() {
      return this.authStatusListener.asObservable();
    }
// método que retorna el cambio de status de tipo de usuarui (en cuanto haya uno)
    getAuthUserTypeListener() {
      return this.authUserTypeListener.asObservable();
    }
// método que crea un nuevo usuario tipo alumno
    createUserAlumno(
      nombres: string,
      apePaterno: string,
      apeMaterno: string,
      matricula: string,
      facultad: string,
      telefono: string,
      email: string,
      password: string,
      image: string
      ) {
      const postData = new FormData();
      postData.append('nombres', nombres);
      postData.append('apePaterno', apePaterno);
      postData.append('apeMaterno', apeMaterno);
      postData.append('relRolId', this.relRolIdAlumno);
      postData.append('matricula', matricula);
      postData.append('image', image, matricula);
      postData.append('facultad', facultad);
      postData.append('telefono', telefono);
      postData.append('usuariosCol', this.usuariosCol);
      postData.append('email', email);
      postData.append('password', password);
      console.log(postData);
      // petición post a servidor, con el objeto Postdata, ue contiene las variables ya antes apendizadas
      this.http.post<{ message: string }>('http://localhost:3001/api/user/signUp', postData)
      .subscribe(response => {
       console.log(response.message);
      });
    }
// método que autentica a un usario tipo alumno
    loginAlumno(matricula: string, password: string) {
      const authDataAlumno: LogInAlumno = { matricula: matricula, password: password };
      this.http
        .post<{ token: string; expiresIn: number; userID: string }>(
          'http://localhost:3001/api/user/loginAlumno',
          authDataAlumno
        )
        .subscribe(
          response => {
            const token = response.token;
            this.token = token;
            console.log('Token: ' + this.token);
            if (token) {
              const expiresInDuration = response.expiresIn;
              this.setAuthTimer(expiresInDuration);
              this.isAuthenticated = true;
              this.isAuthenticated = true;
              this.userId = response.userID;
              this.authStatusListener.next(true);
              this.authUserTypeListener.next('3');
              const now = new Date();
              const expirationDate = new Date(
                now.getTime() + expiresInDuration * 1000
              );
              console.log(expirationDate);
              this.saveAuthData(token, expirationDate, this.userId, '3');
              this.router.navigate(['/menuA']);
            }
          },
          error => {
            this.authStatusListener.next(false);
            this.authUserTypeListener.next('4');
          }
        );
    }
// método que crea un nuevo usuario tipo vigilante
    createUserVigilante(
      nombres: string,
      apePaterno: string,
      apeMaterno: string,
      matricula: string,
      acceso: string,
      clave: string,
      image: File,
      telefono: string,
      email: string,
      password: string
      ) {
      const postData = new FormData();
      postData.append('nombres', nombres);
      postData.append('apePaterno', apePaterno);
      postData.append('apeMaterno', apeMaterno);
      postData.append('relRolId', this.relRolIdVigilante);
      postData.append('matricula', matricula);
      postData.append('acceso', acceso);
      postData.append('clave', clave);
      postData.append('image', image, matricula);
      postData.append('telefono', telefono);
      postData.append('usuariosCol', this.usuariosCol);
      postData.append('email', email);
      postData.append('password', password);
      console.log(postData);
        // petición post a servidor, con el objeto Postdata, que contiene las variables ya antes apendizadas
        // VER EN CARPETA BACKEND PARA CONTINUAR CON EL ENVIO DE INFORMACIÓN
        // HACIA LA BASE DE DATOS
        this.http.post<{ message: string }>('http://localhost:3001/api/user/signUp', postData)
      .subscribe(response => {
       console.log(response.message);
      });

    }
  // método que autentica a un usuario de tipo vigilante
    loginVigilante(clave: string, password: string, acceso: string) {
      const authData: AuthData = { clave: clave, password: password, acceso: acceso };
      this.http
        .post<{ token: string; expiresIn: number; userID: string }>(
          'http://localhost:3001/api/user/loginVigilante',
          authData
        )
        .subscribe(
          response => {
            const token = response.token;
            this.token = token;
            console.log('Token: ' + this.token);
            if (token) {
              const expiresInDuration = response.expiresIn;
              this.setAuthTimer(expiresInDuration);
              this.isAuthenticated = true;
              this.userId = response.userID;
              this.authStatusListener.next(true);
              this.authUserTypeListener.next('2');
              const now = new Date();
              const expirationDate = new Date(
                now.getTime() + expiresInDuration * 1000
              );
              console.log(expirationDate);
              this.saveAuthData(token, expirationDate, this.userId, '2');
              this.router.navigate(['/menuVig1']);
            }
          },
          error => {
            this.authStatusListener.next(false);
            this.authUserTypeListener.next('4');
          }
        );
    }
/*
* este método es llamado en el archivo app.component.ts
* y sirve para comprobar si hay un token ya hecho de algún usuario(hay una sesión abierta)
* o el token está expirado
*/
    autoAuthUser() {
      const authInformation = this.getAuthData();
      if (!authInformation) {
        return;
      }
      const now = new Date();
      const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
      if (expiresIn > 0) {
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.userId = authInformation.userId;
        this.userType = authInformation.userType;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
        this.authUserTypeListener.next(this.userType);
      }
    }
/*
* Método simple para cerrar sesión dde cualquier tipo de usuario
*/
    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      this.authUserTypeListener.next('4');
      this.userId = null;
      clearTimeout(this.tokenTimer);
      this.clearAuthData();
      this.router.navigate(['/']);
    }
/*
* Método para determinar el tiempo que resta de sesión al token
*/
    private setAuthTimer(duration: number) {
      console.log('Setting timer: ' + duration);
      this.tokenTimer = setTimeout(() => {
        this.logout();
      }, duration * 1000);
    }
/*
* Método para escribir datos de sesión de un usuario con localstorage
*/
    private saveAuthData(token: string, expirationDate: Date, userId: string, userType: string) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expirationDate.toISOString());
      localStorage.setItem('userId', userId);
      localStorage.setItem('userType', userType);
    }
/*
* Método para eliminar datos de sesión de un usuario con localstorage
*/
    private clearAuthData() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('userId');
      localStorage.removeItem('userType');
    }
/*
* Método para obtener datos de sesión de un usuario con localstorage
*/
    private getAuthData() {
      const token = localStorage.getItem('token');
      const expirationDate = localStorage.getItem('expiration');
      const userId = localStorage.getItem('userId');
      const userType = localStorage.getItem('userType');
      if (!token || !expirationDate) {
        return;
      }
      return {
        token: token,
        expirationDate: new Date(expirationDate),
        userId: userId,
        userType: userType
      };
    }
}
