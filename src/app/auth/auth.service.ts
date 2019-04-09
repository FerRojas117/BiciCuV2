import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
@Injectable({ providedIn: 'root' })
export class AuthService {
    private relRolIdVigilante = '2';
    private usuariosCol = 'prueba';
    private isAuthenticated = false;
    private token: string;
    private tokenTimer: any;
    private userId: string;
    private authStatusListener = new Subject<boolean>();
    constructor(private http: HttpClient, private router: Router ) {}


    getToken() {
      return this.token;
    }

    getIsAuth() {
      return this.isAuthenticated;
    }

    getUserId() {
      return this.userId;
    }

    getAuthStatusListener() {
      return this.authStatusListener.asObservable();
    }

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
      this.http.post<{ message: string }>('http://localhost:3001/api/user/signUp', postData)
      .subscribe(response => {
       console.log(response.message);
      });

    }

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
              const now = new Date();
              const expirationDate = new Date(
                now.getTime() + expiresInDuration * 1000
              );
              console.log(expirationDate);
              this.saveAuthData(token, expirationDate, this.userId);
              this.router.navigate(['/menuVig1']);
            }
          },
          error => {
            this.authStatusListener.next(false);
          }
        );
    }

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
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
      }
    }

    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      this.userId = null;
      clearTimeout(this.tokenTimer);
      this.clearAuthData();
      this.router.navigate(['/']);
    }

    private setAuthTimer(duration: number) {
      console.log('Setting timer: ' + duration);
      this.tokenTimer = setTimeout(() => {
        this.logout();
      }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date, userId: string) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expirationDate.toISOString());
      localStorage.setItem('userId', userId);
    }

    private clearAuthData() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('userId');
    }

    private getAuthData() {
      const token = localStorage.getItem('token');
      const expirationDate = localStorage.getItem('expiration');
      const userId = localStorage.getItem('userId');
      if (!token || !expirationDate) {
        return;
      }
      return {
        token: token,
        expirationDate: new Date(expirationDate),
        userId: userId
      };
    }
}
