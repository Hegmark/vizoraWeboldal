import { Component, OnInit } from '@angular/core';
import { AddressDataComponent } from '../../components/address-data/address-data.component';
import { DAOService } from '../../services/DAO/dao.service';
import { Address } from '../../models/addressInterface';
import { NgIf } from '@angular/common';
import { Reading } from '../../models/readingInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reader-data',
  standalone: true,
  imports: [AddressDataComponent, NgIf],
  templateUrl: './reader-data.component.html',
  styleUrl: './reader-data.component.css'
})
export class ReaderDataComponent implements OnInit{
  public address?:Address;
  public readings:any;
  private id:string ='';

  constructor(private dao: DAOService, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
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
}
