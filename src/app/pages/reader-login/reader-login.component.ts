import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reader-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './reader-login.component.html',
  styleUrl: './reader-login.component.css'
})
export class ReaderLoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) { }

  onSubmit() {
    //TODO login logika
    this.router.navigate(['reader-list']);
  }
  register() {
    this.router.navigate(['reader-register']);
  }
}
