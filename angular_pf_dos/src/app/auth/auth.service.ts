import { Injectable } from '@angular/core';
import { LoginDTO } from './login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() { }

  LogIn(cred: LoginDTO): boolean{
    this.isLoggedIn = (cred.user == 'sa' && cred.pwd == 'jsr');
    return this.isLoggedIn;
  }
}
