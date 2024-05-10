import { Component, Input  } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Address } from '../../models/addressInterface';
import { DataTransferService } from '../../services/DataTransfer/data-transfer.service';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {

    @Input() data?: Array<Address> = [];
    constructor(private router: Router, private carrier: DataTransferService) { }

    manageAddress(address:any){
      this.carrier.setSharedData(address);
      this.router.navigate(['reader-data']);
    }
}
