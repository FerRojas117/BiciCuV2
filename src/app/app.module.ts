import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import {  AdminControlComponent } from './admin-control/admin-control.component';
import { AdminAccesosComponent } from './admin-accesos/admin-accesos.component';
import {  AdminExportComponent } from './admin-export/admin-export.component';
import { AdminRegistroEx1Component } from './admin-registroEx1/admin-registroEx1.component';
import {  AdminRegistroEx2Component } from './admin-registroEx2/admin-registroEx2.component';
import {  AdmininicioComponent } from './admin-inicio/admin-inicio.component';
import { RegistroVigComponent } from './registro-vig/registro-vig.component';
import {  RecuperarContrComponent } from './recuperar-contr/recuperar-contr.component';
import {  RecuperarContr2Component } from './recuperar-contr2/recuperar-contr2.component';
import {  InicioRComponent } from './inicio-reg/inicio-reg.component';
import {  IntroComponent } from './intro/intro.component';
import {  AlumnosComponent } from './alumnos/alumnos.component';
import {  InicioVigilantesComponent } from './iniciovigilantes/iniciovigilantes.component';
import {  MenuAlumnoComponent } from './menualumno/menualumno.component';
import {  MenuVigilantes2Component } from './menuvigilantes2/menuvigilantes2.component';
import {  MenuVigilantesComponent } from './menuvigilantes/menuvigilantes.component';
import { RegistroEx1Component } from './registro-extemporaneo1/registro-extemporaneo1.component';
import { RegistroEx2Component } from './registro-extemporaneo2/registro-extemporaneo2.component';
import { RegistroTemporalComponent } from './registrotemporal/registrotemporal.component';
import { RegistroTemporal2Component } from './registrotemporal2/registrotemporal2.component';
import { MenuComponent } from './menu/menu.component';
import { from } from 'rxjs';
import { GeneraQRComponent } from './generaQR/generaQR.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HammerCardComponent } from './HammerQRcode/hammer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
//import { ScanQRComponent } from './ScanQR/scanqr.component';
//import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { CommonModule } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AdminControlComponent,
    AdminAccesosComponent,
    AdminExportComponent,
    AdminRegistroEx1Component,
    AdminRegistroEx2Component,
    AdmininicioComponent,
    RegistroVigComponent,
    RecuperarContrComponent,
    RecuperarContr2Component,
    InicioRComponent,
    IntroComponent,
    AlumnosComponent,
    InicioVigilantesComponent,
    MenuComponent,
    MenuAlumnoComponent,


        
    MenuVigilantes2Component,
    MenuVigilantesComponent,
    RegistroEx1Component,
    RegistroEx2Component,
    RegistroVigComponent,
    RegistroTemporalComponent,
    RegistroTemporal2Component,
GeneraQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ZXingScannerModule,
    //NgQRCodeReaderModule,
    CommonModule,
    ZXingScannerModule,
    ZXingScannerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
