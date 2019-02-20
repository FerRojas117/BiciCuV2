import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdminMenu } from './admin-menu/admin-menu.component';
import { AdminControl } from './admin-control/admin-control.component';
import { AdminAccesos } from './admin-accesos/admin-accesos.component';
import { AdminRegistroEx1 } from './admin-registroEx1/admin-registroEx1.component';
import { RegistroVig } from './registro-vig/registro-vig.component';
import { AdminExport } from './admin-export/admin-export.component';
import { Admininicio } from './admin-inicio/admin-inicio.component';
import { RecuperarContr } from './recuperar-contr/recuperar-contr.component';
import { RecuperarContr2 } from './recuperar-contr2/recuperar-contr2.component';
import { InicioR } from './inicio-reg/inicio-reg.component';
import { Intro } from './intro/intro.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'amenu', component: AdminMenu},
  {path: 'aControlB', component: AdminControl},
  {path: 'aAccesos', component: AdminAccesos},
  {path: 'aRegE1', component: AdminRegistroEx1},
  {path: 'aRegV', component: RegistroVig},
  {path: 'aExp', component: AdminExport},
  {path: 'aInicio', component: Admininicio},
  {path: 'recuperar', component: RecuperarContr},
  {path: 'recuperar2', component: RecuperarContr2},
  {path: 'inicioR', component: InicioR},
  {path: 'intro', component: Intro},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
