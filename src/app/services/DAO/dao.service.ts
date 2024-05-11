import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reading } from '../../models/readingInterface';
import { User } from '../../models/userInterface';
import { Address } from '../../models/addressInterface';

@Injectable({
  providedIn: 'root'
})
export class DAOService {

  constructor(private afs: AngularFirestore) { }


  createReading(reading: Reading) {
    reading.id = this.afs.createId();
    this.afs.collection<Reading>("readings").doc(reading.id).set(reading);
  }

  modifyReading(reading: Reading) {
    this.afs.collection('readings').doc(reading.id).update(reading);
  }

  deleteReading(reading: Reading) {
    this.afs.collection('readings').doc(reading.id).delete();
  }

  getAllAddresses() {
    return this.afs.collection<Address>("addresses").valueChanges();
  }

  getReadingsByAddress(address: Address) {
    return this.afs.collection('readings', ref => ref.where('address', '==', address)).valueChanges();
  }

  getAddressById(id: string){
    return this.afs.collection('addresses').doc(id).valueChanges();
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
      address.id = this.afs.createId();
      await this.afs.collection('addresses').doc(address.id).set(address);
      return true;
    } catch (error: any) {
      console.log('Error saving address:', error);
      return error.message;
    }
  }
}
