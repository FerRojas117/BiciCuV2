import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { AdminAccesosComponent } from './admin-accesos/admin-accesos.component';
import { AdminRegistroEx1Component } from './admin-registroEx1/admin-registroEx1.component';
import { AdminRegistroEx2Component } from './admin-registroEx2/admin-registroEx2.component';
import { RegistroVigComponent } from './registro-vig/registro-vig.component';
import { AdminExportComponent } from './admin-export/admin-export.component';
import { AdmininicioComponent } from './admin-inicio/admin-inicio.component';
import { RecuperarContrComponent } from './recuperar-contr/recuperar-contr.component';
import { RecuperarContr2Component } from './recuperar-contr2/recuperar-contr2.component';
import { InicioRComponent } from './inicio-reg/inicio-reg.component';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InicioVigilantesComponent } from './iniciovigilantes/iniciovigilantes.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAlumnoComponent } from './menualumno/menualumno.component';
import { MenuVigilantes2Component } from './menuvigilantes2/menuvigilantes2.component';
import { MenuVigilantesComponent } from './menuvigilantes/menuvigilantes.component';
import { RegistroEx1Component } from './registro-extemporaneo1/registro-extemporaneo1.component';
import { RegistroEx2Component } from './registro-extemporaneo2/registro-extemporaneo2.component';
import { RegistroTemporalComponent } from './registrotemporal/registrotemporal.component';
import { RegistroTemporal2Component } from './registrotemporal2/registrotemporal2.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'amenu', component: AdminMenuComponent},
  {path: 'aControlB', component: AdminControlComponent},
  {path: 'aAccesos', component: AdminAccesosComponent},
  {path: 'aRegE1', component: AdminRegistroEx1Component},
  {path: 'aRegE2', component: AdminRegistroEx2Component},
  {path: 'aRegV', component: RegistroVigComponent},
  {path: 'aExp', component: AdminExportComponent},
  {path: 'aInicio', component: AdmininicioComponent},
  {path: 'recuperar', component: RecuperarContrComponent},
  {path: 'recuperar2', component: RecuperarContr2Component},
  {path: 'inicioR', component: InicioRComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'inicioVig', component: InicioVigilantesComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'menuA', component: MenuAlumnoComponent},
  {path: 'menuVig2', component: MenuVigilantes2Component},
  {path: 'menuVig1', component: MenuVigilantesComponent},
  {path: 'regE1', component: RegistroEx1Component},
  {path: 'regE2', component: RegistroEx2Component},
  {path: 'regTemp1', component: RegistroTemporalComponent},
  {path: 'regTemp2', component: RegistroTemporal2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
