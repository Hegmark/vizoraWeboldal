import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address-data.component.html',
  styleUrl: './address-data.component.css'
})
export class AddressDataComponent{

  addressForm = new FormGroup({
    cityCode: new FormControl('', Validators.required),
    cityName: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    houseNumber: new FormControl('', Validators.required),
    apartmentNumber: new FormControl(''),
    amount: new FormControl('', Validators.required)
  });

  
  @Output() ReadingEmitter = new EventEmitter<any>();

  constructor() {}


  onSubmit() {
    this.ReadingEmitter.emit("");
  }
}
