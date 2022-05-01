import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.checkLogged();
  }

  canActivateChild(): boolean | UrlTree {
    return this.checkLogged();
  }
  
  checkLogged(){
    return this.authService.isLoggedIn || this.router.parseUrl('/auth/login');
  }

}
