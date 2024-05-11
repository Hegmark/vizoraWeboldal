import { Component, Input  } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Address } from '../../models/addressInterface';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {

    @Input() data?: Array<Address> = [];
    constructor(private router: Router, private auth:AuthService) { }

    manageAddress(address:any){
      if(this.auth.isLoggedIn()){
        this.router.navigate(['reader-data', {addressId: address.id}]);
      }else{
        this.router.navigate(['civil-data', {addressId: address.id}]);
      }
    }
}
