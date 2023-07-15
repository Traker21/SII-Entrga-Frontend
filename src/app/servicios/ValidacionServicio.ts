import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class validacionServicio {
  public  validarNumero =  "^[0-9]*$"
  public validarNombre = '^^[a-zA-Z ]+$'

  constructor() { }

}
