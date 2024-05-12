import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { Address } from '../../models/addressInterface';
import { DAOService } from '../../services/DAO/dao.service';
import { BarComponent } from '../../components/bar/bar/bar.component';


@Component({
  selector: 'app-address-register',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, BarComponent],
  templateUrl: './address-register.component.html',
  styleUrl: './address-register.component.css'
})
export class AddressRegisterComponent {

  addressForm = new FormGroup({
    cityCode: new FormControl('', Validators.required),
    cityName: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    houseNumber: new FormControl('', Validators.required),
    apartmentNumber: new FormControl(''),
  });



  constructor(private router: Router, private dao: DAOService) { }

  async onSubmit() {
    if (this.addressForm && this.addressForm.valid) {
      const address: Address = {
        code: this.addressForm.get('cityCode')?.value as string,
        cityName: this.addressForm.get('cityName')?.value as string,
        street: this.addressForm.get('street')?.value as string,
        houseNumber: this.addressForm.get('houseNumber')?.value as string,
        apartment: this.addressForm.get('apartmentNumber')?.value as string
      };
      const result = await this.dao.createAddress(address);
      if (result === true) {
        this.router.navigate(['reader-list']);
      }else{
        alert(result)
      }

    }

  }
} 
