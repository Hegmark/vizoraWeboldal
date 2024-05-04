import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: any, password: any){
    return this.auth.signInWithEmailAndPassword(email as string, password as string);
  }

  register(email:any, password:any){
    return this.auth.createUserWithEmailAndPassword(email as string, password as string);
  }
}
