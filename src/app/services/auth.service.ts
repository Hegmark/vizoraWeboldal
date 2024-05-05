import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: any = null;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  login(email: any, password: any) {
    return this.auth.signInWithEmailAndPassword(email as string, password as string);
  }

  register(email: any, password: any) {
    return this.auth.createUserWithEmailAndPassword(email as string, password as string);
  }

  getUser() {
    return this.currentUser
  }
}
