import { Address } from './addressInterface';
import { User } from './userInterface';

export interface Reading {
  address: Address;
  date: Date;
  amount: number;
  reader: User;
}