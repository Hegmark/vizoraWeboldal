import { Component } from '@angular/core';
import { Address } from '../../models/addressInterface';
import { DAOService } from '../../services/DAO/dao.service';
import { Router } from '@angular/router';
import { AddressListComponent } from '../../components/address-list/address-list.component';

@Component({
  selector: 'app-civil-list',
  standalone: true,
  imports: [AddressListComponent],
  templateUrl: './civil-list.component.html',
  styleUrl: './civil-list.component.css'
})
export class CivilListComponent {

  data?:Array<Address>;
  constructor(private dao: DAOService, private router:Router){}

  ngOnInit(): void{
    this.dao.getAllAddresses().subscribe((data: Array<Address>) =>{
      this.data = data;
    })
  }
}
