import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reading } from '../../models/readingInterface';
import {  NgFor, NgIf} from '@angular/common';
import { DAOService } from '../../services/DAO/dao.service';
import { Address } from '../../models/addressInterface';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-address-data',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, NgFor, NgIf ],
  templateUrl: './address-data.component.html',
  styleUrl: './address-data.component.css'
})
export class AddressDataComponent implements OnInit {

  public reader: string = 'Civil bejelentés';
  public underModificationId: string = '0';
  public selectedDate?:Date;

  @Output() ReadingEmitter = new EventEmitter<Reading>();
  @Input() data?: Array<Reading> = [];
  @Input() address?: Address = undefined;

  newReading?: Reading = undefined;

  readingForm = new FormGroup({
    date: new FormControl<Date>(new Date, Validators.required),
    amount: new FormControl<number>(0, [Validators.required, Validators.min(0)])
  })

  readingFormMod = new FormGroup({
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

  modifyItem(item: Reading) {
    this.underModificationId = item.id as string;
    this.readingFormMod.patchValue({
      date: item.date,
      amount: item.amount
    });
  }

  deleteItem(item: Reading) {
    this.dao.deleteReading(item);
  }

  createReading() {
    const reading: Reading = {
      date: this.readingForm.get("date")?.value as Date,
      amount: this.readingForm.get("amount")?.value as number,
      reader: this.reader as string,
      address: this.address as Address
    }
    console.log(reading)
    this.ReadingEmitter.emit(reading);
  }


  saveChanges() {
    const reading: Reading = {
      date: this.readingFormMod.get("date")?.value as Date,
      amount: this.readingFormMod.get("amount")?.value as number,
      reader: this.reader as string,
      address: this.address as Address,
      id: this.underModificationId
    }
    this.dao.modifyReading(reading);
    this.underModificationId = '0';
  }
  cancelModify() {
    this.underModificationId = '0';
  }

}
