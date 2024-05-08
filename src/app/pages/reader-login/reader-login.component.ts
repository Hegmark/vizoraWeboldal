import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

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

  async onSubmit() {
    try { 
      await(this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get("password")?.value).then((success)=>{
        if(success === true){
          this.router.navigate(['reader-list']);
        }else{
          throw new Error(success)
        }
      }))
    }catch(error:any){
      alert(error.message)
    }
  }
  
  register() {
    this.router.navigate(['reader-register']);
  }
}
