import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MenuServicio {
  private actualizarSubject = new Subject<string>();

  actualizarHeaderMenu(nuevoTexto : string) {
      this.actualizarSubject.next(nuevoTexto);
  }
  obtenerActualizacion() : Observable<any> {
    return this.actualizarSubject.asObservable();
  }
}
