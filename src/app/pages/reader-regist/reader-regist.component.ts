import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reader-regist',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './reader-regist.component.html',
  styleUrl: './reader-regist.component.css'
})
export class ReaderRegistComponent {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required])
    })
  });

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    if (this.signUpForm.get('password')?.value == this.signUpForm.get('rePassword')?.value) {
      this.authService.register(this.signUpForm.get('email')?.value, this.signUpForm.get("password")?.value).then(cred => {
        this.router.navigate(['reader-list']);
      }).catch(error => {
        alert(error.message)
      })
    } else {
      alert("Jelszavak nem egyeznek!");
    }
  }
}
