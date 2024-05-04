import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reader-regist',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './reader-regist.component.html',
  styleUrl: './reader-regist.component.css'
})
export class ReaderRegistComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private router: Router) { }

  onSubmit() {
    //TODO login logika
    this.router.navigate(['reader-list']);
  }
}
