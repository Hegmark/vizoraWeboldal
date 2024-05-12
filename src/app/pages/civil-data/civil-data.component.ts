import { Component, OnInit } from '@angular/core';
import { AddressDataComponent } from '../../components/address-data/address-data.component';
import { Reading } from '../../models/readingInterface';
import { NgIf } from '@angular/common';
import { Address } from '../../models/addressInterface';
import { DAOService } from '../../services/DAO/dao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-civil-data',
  standalone: true,
  imports: [AddressDataComponent, NgIf],
  templateUrl: './civil-data.component.html',
  styleUrl: './civil-data.component.css'
})
export class CivilDataComponent implements OnInit {
  readings: any;
  address: Address | undefined;
  private id: string = '';

  constructor(private dao: DAOService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['addressId'];
    })
  }

  ngOnInit(): void {
    this.dao.getAddressById(this.id).subscribe((address) => {
      this.address = address as Address;
      this.dao.getReadingsByAddress(this.address as Address).subscribe((readings) => {
        this.readings = readings;
      });
    })

  }

  createReading($event: Reading) {
    this.dao.createReading($event);
  }
}
