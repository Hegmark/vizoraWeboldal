import { Component, OnInit } from '@angular/core';
import { AddressListComponent } from '../../components/address-list/address-list.component';
import { DAOService } from '../../services/DAO/dao.service';
import { Router } from '@angular/router';
import { Address } from '../../models/addressInterface';

@Component({
  selector: 'app-reader-list',
  standalone: true,
  imports: [AddressListComponent],
  templateUrl: './reader-list.component.html',
  styleUrl: './reader-list.component.css'
})
export class ReaderListComponent implements OnInit{

  data?:Array<Address>;
  constructor(private dao: DAOService, private router:Router){}

  ngOnInit(): void{
    this.dao.getAllAddresses().subscribe((data: Array<Address>) =>{
      this.data = data;
    })
  }

  navToCreate(){
    this.router.navigate(['address-register']);
  }
}
