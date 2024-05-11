import { Address } from './addressInterface';

export interface Reading {
  id?: string;
  address: Address;
  date: Date;
  amount: number;
  reader: string;
}