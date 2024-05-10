import { Component, OnInit } from '@angular/core';
import { AddressDataComponent } from '../../components/address-data/address-data.component';
import { DAOService } from '../../services/DAO/dao.service';
import { DataTransferService } from '../../services/DataTransfer/data-transfer.service';
import { Address } from '../../models/addressInterface';
import { NgIf } from '@angular/common';
import { Reading } from '../../models/readingInterface';

@Component({
  selector: 'app-reader-data',
  standalone: true,
  imports: [AddressDataComponent, NgIf],
  templateUrl: './reader-data.component.html',
  styleUrl: './reader-data.component.css'
})
export class ReaderDataComponent implements OnInit{
  public address?:Address;
  public readings:Array<Reading> =[];

  constructor(private dao: DAOService, private carrier:DataTransferService){}

  ngOnInit(): void {
    this.address = this.carrier.getSharedData();
    this.readings[0] = {date: new Date, amount: 10, reader:"ASD",address: this.address as Address}
    this.readings[1] = {date: new Date, amount: 12, reader:"ASD",address: this.address as Address}
    this.readings[2] = {date: new Date, amount: 13, reader:"ASD",address: this.address as Address}
  }

  createReading($event:Reading){
    this.dao.createReading($event);
  }
}
