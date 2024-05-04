import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reader-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './reader-login.component.html',
  styleUrl: './reader-login.component.css'
})
export class ReaderLoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get("password")?.value).then(cred => {
      this.router.navigate(['reader-list']);
    })

  }
  register() {
    this.router.navigate(['reader-register']);
  }
}
