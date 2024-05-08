import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/userInterface';
import { AuthGuard } from '../../services/guard/guard.guard';

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

  constructor(private router: Router, private authService: AuthService, private authG: AuthGuard) { }

  async onSubmit() {
    if (this.signUpForm.get('password')?.value == this.signUpForm.get('rePassword')?.value) {
      const user: User = {
        email: this.signUpForm.get("email")?.value as string,
        firstName: this.signUpForm.get("name.firstname")?.value as string,
        lastName: this.signUpForm.get("name.lastname")?.value as string,
      }
      try {
        /*await (this.authService.register(user, this.signUpForm.get('password')?.value as string).then((success) => {
          console.log(success)
          if (success === true) {
            this.router.navigate(['reader-list']);
          } else {
            throw new Error(success)
          }
        }))*/
        const success = await (this.authService.register(user, this.signUpForm.get('password')?.value as string))
        if (this.authG.canActivate()) {
          this.router.navigate(['reader-list']);
        } else {
          throw new Error(success)
        }
      } catch (error: any) {
        console.log(error)
        alert(error)
      }
    } else {
      alert("Jelszavak nem egyeznek!");
    }
  }
}
