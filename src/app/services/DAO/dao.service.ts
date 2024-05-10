import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reading } from '../../models/readingInterface';
import { User } from '../../models/userInterface';
import { Address } from '../../models/addressInterface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DAOService {

  constructor(private afs: AngularFirestore) { }


  createReading(reading: Reading) {
    this.afs.collection<Reading>("readings").add(reading);
  }

  modifyReading(reading: Reading) {

  }

  deleteReading(reading: Reading) {

  }

  getAllAddresses() {
    return this.afs.collection<Address>("addresses").valueChanges();
  }

  getReadingsByUser(user: User) {

  }

  getReadingsByCity(city: string) {

  }

  async getUser(sUser: string): Promise<any> {
    this.afs.collection('users', ref => ref.where('uid', '==', sUser))
      .valueChanges()
      .subscribe((users: any[]) => {
        if (users.length > 0) {
          const user: User = {
            email: users[0].email,
            firstName: users[0].firstName,
            lastName: users[0].lastName,
            uid: users[0].uid
          }
          return user;
        } else {
          return false;
        }
      });
  }

  async createUser(user: User) {
    this.afs.collection('users').doc(user.uid).set(user);
  }

  async createAddress(address: Address): Promise<boolean | string> {
    try {
      await this.afs.collection('addresses').add(address);
      return true;
    } catch (error:any) {
      console.log('Error saving address:', error);
      return error.message;
    }
  }
}
