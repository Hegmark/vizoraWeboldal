import { Component, Input  } from '@angular/core';
import { NgFor } from '@angular/common';
import { Reading } from '../../models/readingInterface';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {

    @Input() data?: Array<Reading> = [];

}
