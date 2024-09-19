import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: any = {
    username: '',
    password: '',
  }

  LoggedIn: boolean = false;

  constructor(private router: Router, private authService:AuthService ){}

  Login(){
    if (this.authService.login(this.user.username, this.user.password)) {
      this.router.navigateByUrl('/products');
    }
    else{
      alert('Wrong user entered');
    }
  }

}
