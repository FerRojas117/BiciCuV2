import { Component } from '@angular/core';
@Component({
  selector: 'scanqr-app',
  templateUrl: 'generaQR.component.html',
  styleUrls: ['./generaQR.component.scss']
})
export class GeneraQRComponent {

  public myAngularxQrCode: string = null;
  constructor () {
    this.myAngularxQrCode = 'VALVELA130232ROCO';
  }

}