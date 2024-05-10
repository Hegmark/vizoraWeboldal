import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, NgModel } from '@angular/forms';
import { Reading } from '../../models/readingInterface';
import { NgFor } from '@angular/common';
import { DAOService } from '../../services/DAO/dao.service';
import { Address } from '../../models/addressInterface';

@Component({
  selector: 'app-address-data',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './address-data.component.html',
  styleUrl: './address-data.component.css'
})
export class AddressDataComponent implements OnInit {

  public reader: string = 'civil';

  @Output() ReadingEmitter = new EventEmitter<Reading>();
  @Input() data?: Array<Reading> = [];
  @Input() address?: Address = undefined;

  newReading?: Reading = undefined;
  readingForm = new FormGroup({
    date: new FormControl<Date>(new Date, Validators.required),
    amount: new FormControl<number>(0, [Validators.required, Validators.min(0)])
  })

  constructor(private dao: DAOService) { }
  ngOnInit(): void {
    const uid: string = sessionStorage.getItem("uid") as string;
    if (uid) {
      this.reader = uid
    }
  }

  modifyItem(item: any) {
  }

  deleteItem(item: any) {
  }

  createReading() {
    const reading: Reading = {
      date: this.readingForm.get("date")?.value as Date,
      amount: this.readingForm.get("amount")?.value as number,
      reader: this.reader as string,
      address: this.address as Address
    }
    this.ReadingEmitter.emit(reading);
  }
}
