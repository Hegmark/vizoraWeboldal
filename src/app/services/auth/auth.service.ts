import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DAOService } from '../DAO/dao.service';
import { User } from '../../models/userInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private auth: AngularFireAuth, private dao: DAOService) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn.next(true);
      } else {
        this.loggedIn.next(false);
      }
    });
  }


  async login(email: any, password: any): Promise<any> {
    try {
      const userCredential = await (this.auth.signInWithEmailAndPassword(email, password))
      const userFs = userCredential.user;
      this.storeUserInSessionStorage(userFs?.uid as string)
      return true;
    } catch (error: any) {
      console.log('Error logging in:', error);
      return error.message;
    }
  }

  async register(userOg: User, password: string): Promise<any> {
    try {
      const userCredential = await (this.auth.createUserWithEmailAndPassword(userOg.email, password))
      userOg.uid = userCredential.user?.uid as string;
      await (this.dao.createUser(userOg)).then(async () => {
        const success = await this.login(userOg.email, password)
        console.log(success)
        return success
      })
    } catch (error: any) {
      console.log('Error registering in:', error);
      throw new Error(error.message);
    }
  }

  storeUserInSessionStorage(uid: string) {
    const userData = JSON.stringify(uid);
    sessionStorage.setItem('uid', uid);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
