import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet,Router } from '@angular/router';


@Component({
  selector: 'app-address-register',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './address-register.component.html',
  styleUrl: './address-register.component.css'
})
export class AddressRegisterComponent {

  waterUsedForm = new FormGroup({
    address: new FormControl(''),
    date: new FormControl(''),
    amount: new FormControl(''),
    
  });


  constructor(private router: Router) { }

  onSubmit() {
    //TODO save logika
    this.router.navigate(['reader-list']);
  }
}
