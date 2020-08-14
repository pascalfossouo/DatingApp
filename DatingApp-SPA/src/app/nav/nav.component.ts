import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{

    this.authService.login(this.model).subscribe(next => {
      console.log('Login succesfully');
    }, error => {
      console.log('Failed Login');
    });
    console.log(this.model);
  }

  loggedIn(): boolean{
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void{
    localStorage.removeItem('token');
    console.log('logged out');
  }
}