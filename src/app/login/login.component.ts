import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){}

  user: any = {
    username: '',
    password: '',
  }

  Login(){
    if(this.user.username == 'user' && this.user.password == 'password'){
      this.router.navigateByUrl('/products')
    }
    else{
      alert('Wrong user entered')
    }
  }

}
