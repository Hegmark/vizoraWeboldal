import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if(sessionStorage.getItem("uid") !== null && this.auth.loggedIn$){
      return true
    }
    this.router.navigate(['/home']);
    return false;
  }
} 