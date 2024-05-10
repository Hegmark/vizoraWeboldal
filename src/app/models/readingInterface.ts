import { Address } from './addressInterface';

export interface Reading {
  address: Address;
  date: Date;
  amount: number;
  reader: string;
}