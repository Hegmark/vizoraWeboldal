import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {

  constructor(private router: Router,private auth:AuthService) { }

  logout(){
    this.auth.logout();
    sessionStorage.removeItem('uid');
    this.router.navigate(['home']);
  }
}
