import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminMenu } from './admin-menu/admin-menu.component';
import { AdminControl } from './admin-control/admin-control.component';
import { AdminAccesos } from './admin-accesos/admin-accesos.component';
import { AdminExport } from './admin-export/admin-export.component';
import { AdminRegistroEx1 } from './admin-registroEx1/admin-registroEx1.component';
import { AdminRegistroEx2 } from './admin-registroEx2/admin-registroEx2.component';
import { Admininicio } from './admin-inicio/admin-inicio.component';
import { RegistroVig } from './registro-vig/registro-vig.component';
import { RecuperarContr } from './recuperar-contr/recuperar-contr.component';
import { RecuperarContr2 } from './recuperar-contr2/recuperar-contr2.component';
import { InicioR } from './inicio-reg/inicio-reg.component';
import { Intro } from './intro/intro.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AdminMenu,
    AdminControl,
    AdminAccesos,
    AdminExport,
    AdminRegistroEx1,
    AdminRegistroEx2,
    Admininicio,
    RegistroVig,
    RecuperarContr,
    RecuperarContr2,
    InicioR,
    Intro,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
