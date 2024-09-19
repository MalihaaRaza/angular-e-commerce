import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../users';

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

  constructor(private router: Router){}

  Login(){
    if(this.user.username == 'user' && this.user.password == '123'){
      this.LoggedIn = true;
      this.router.navigateByUrl('/products');
    }
    else{
      alert('Wrong user entered');
    }
  }

}
