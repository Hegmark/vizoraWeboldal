import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule,MatTooltipModule],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.css'
})
export class InitialComponent {

  constructor(private router: Router) { }


  civilListNavigate() {
    this.router.navigate(['civil-list']);
  }
  readerLoginNavigate(){
    this.router.navigate(['reader-login']);
  }

}
