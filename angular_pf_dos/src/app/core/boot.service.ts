import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootService {

  // Al arrancar valida si hay un token para el usuario actual, en caso de que no,
  // regresa false o manda llamar el login en el Módulo de Auth
  constructor() { }
}
