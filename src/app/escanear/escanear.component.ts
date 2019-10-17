import { Component, OnInit, NgModule } from '@angular/core';
import {formatDate } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { EscanearService } from '../escanear/escanear.service';

@Component({
  templateUrl: 'escanear.component.html',
  styleUrls: ['./escanear.component.scss']
})
export class EscanearComponent implements OnInit{
  public QRCode: string = null;

  constructor (private scan:EscanearService) {
    
  }
    ngOnInit() {
     
    }

    onCodeResult(resultString: string) {

      this.scan.sendQRData(resultString).subscribe(
        res=>{
          console.log(res)
        },
        error=>{
          console.log(error)
        }
      )
    }
  }
  