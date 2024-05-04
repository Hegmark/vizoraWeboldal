import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.css'
})
export class InitialComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  civilListNavigate() {
    this.router.navigate(['civil-list']);
  }
  readerLoginNavigate(){
    this.router.navigate(['reader-login']);
  }

}
