import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import bcrypt from 'bcryptjs';
@Component({
  selector: 'scanqr-app',
  templateUrl: 'generaQR.component.html',
  styleUrls: ['./generaQR.component.scss']
})
export class GeneraQRComponent implements OnInit{
  public QRCode: string = null;
  public CQRCode: string = null;
  public Nombre: string = null;
  public Apellido: string = null;
  public Time: string = null;
  public Rodada: string = null;
  public NoSerie: string = null;
  public stoday = '';
  public today: number = Date.now();

  constructor () {
    this.stoday = formatDate(this.today, 'ddMMyyyyhhmmssa', 'en-US', '+0530');
    this.Time=this.stoday;
    this.Nombre ='Javier';
    this.Apellido ='Amador';
    this.Rodada ='234';
    this.NoSerie ='567';
    this.QRCode = this.Nombre+this.Apellido+this.Rodada+this.NoSerie+this.Time;
    this.CQRCode= bcrypt.hashSync(this.QRCode, 10);
  }
    ngOnInit() {
     
    }
  }
