import { Component } from '@angular/core';
import { AddressDataComponent } from '../../components/address-data/address-data.component';
import { DAOService } from '../../services/DAO/dao.service';

@Component({
  selector: 'app-reader-data',
  standalone: true,
  imports: [AddressDataComponent],
  templateUrl: './reader-data.component.html',
  styleUrl: './reader-data.component.css'
})
export class ReaderDataComponent {

  constructor(private dao: DAOService){}

  createReading($event:any){
    console.log("event:" + event);
    //this.dao.createReading();
  }
}
