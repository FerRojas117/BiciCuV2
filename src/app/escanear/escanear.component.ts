import { Component, OnInit, NgModule } from '@angular/core';
import {formatDate } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
@Component({
  templateUrl: 'escanear.component.html',
  styleUrls: ['./escanear.component.scss']
})
export class EscanearComponent implements OnInit{
  public QRCode: string = null;
  qrResultString: string;
  constructor () {
    
  }
    ngOnInit() {
     
    }

    onCodeResult(resultString: string) {
      this.qrResultString = resultString;
      console.log(this.qrResultString);
    }
  }
  