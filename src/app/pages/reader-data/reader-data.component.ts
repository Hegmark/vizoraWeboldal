import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddressDataComponent } from '../../components/address-data/address-data.component';
import { DAOService } from '../../services/DAO/dao.service';
import { Address } from '../../models/addressInterface';
import { NgIf } from '@angular/common';
import { Reading } from '../../models/readingInterface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BarComponent } from '../../components/bar/bar/bar.component';

@Component({
  selector: 'app-reader-data',
  standalone: true,
  imports: [AddressDataComponent, NgIf, BarComponent],
  templateUrl: './reader-data.component.html',
  styleUrl: './reader-data.component.css'
})
export class ReaderDataComponent implements OnInit, OnDestroy{
  public address?:Address;
  public readings:any;
  private id:string ='';
  private subscription?: Subscription;

  constructor(private dao: DAOService, private route: ActivatedRoute){
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['addressId'];
    })
  }

  ngOnInit(): void {
    this.dao.getAddressById(this.id).subscribe((address) => {this.address = address as Address;
      this.dao.getReadingsByAddress(this.address as Address).subscribe((readings) => {
        this.readings = readings;
      });
    })
    
  }

  createReading($event:Reading){
    this.dao.createReading($event);
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
