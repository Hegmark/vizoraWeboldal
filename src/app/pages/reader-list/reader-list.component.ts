import { Component, OnInit } from '@angular/core';
import { AddressListComponent } from '../../components/address-list/address-list.component';
import { DAOService } from '../../services/DAO/dao.service';
import { Reading } from '../../models/readingInterface';

@Component({
  selector: 'app-reader-list',
  standalone: true,
  imports: [AddressListComponent],
  templateUrl: './reader-list.component.html',
  styleUrl: './reader-list.component.css'
})
export class ReaderListComponent implements OnInit{

  data?:Array<Reading>;
  constructor(private dao: DAOService){}

  ngOnInit(): void{
    this.dao.getAllReadings().subscribe((data: Array<Reading>) =>{
      this.data = data;
    })
  }
}
