
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
/*
* Este archivo implementa la clase CanActivate, que puede proteger rutas del front-end
* (ejemplo en app.routing.ts)
*/
@Injectable({providedIn: 'root'})
export class AuthAlumnoGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth();
    const userType = this.authService.getUserType();
    console.log(userType);
    if (!isAuth || userType != '3') {
      this.authService.logout();
      this.router.navigate(['/alumnos']);
    }
    return isAuth;
  }
}
