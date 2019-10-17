import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscanearService {

  constructor(private http: HttpClient) { }

  sendQRData(codigo: string){
    return this.http.post('http://localhost:3000/api/user/leerQR', {
      codigo: codigo
    });
  }
}
