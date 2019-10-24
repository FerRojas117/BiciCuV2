<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  fader, stepper, slider } from './route.animations';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> 7dbe08e16f29a155ceb70456f15fc7300a080d06

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    slider,
    stepper
  ]
})
export class AppComponent implements OnInit {
  title = 'bicicuV2';
<<<<<<< HEAD
constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.autoAuthUser();
  }

}
=======
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
>>>>>>> 7dbe08e16f29a155ceb70456f15fc7300a080d06
