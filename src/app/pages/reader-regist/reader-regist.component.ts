import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.signUpForm.get('email')?.value, this.signUpForm.get("password")?.value).then(cred => {
      this.router.navigate(['reader-list']);
    })
  }
}
