import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reading } from '../../models/readingInterface';
import { User } from '../../models/userInterface';
import { simpleUser } from '../../models/simpleUserInterface';

@Injectable({
  providedIn: 'root'
})
export class DAOService {

  constructor(private afs: AngularFirestore) { }


  createReading(reading: Reading) {
    this.afs.collection<Reading>("Readings").add(reading);
  }

  modifyReading(reading: Reading) {

  }

  deleteReading(reading: Reading) {

  }

  getAllReadings() {
    return this.afs.collection<Reading>("Readings").valueChanges();
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
          console.log(user)
          return user;
        } else {
          return false;
        }
      });
  }

  async createUser(user: User) {
    this.afs.collection('users').doc(user.uid).set(user);
  }
}
