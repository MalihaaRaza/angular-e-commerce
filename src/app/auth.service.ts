import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly user = { 
    username: 'user', 
    password: '123' 
  };
  private loggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.user.username && password === this.user.password) {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); 
      localStorage.setItem('user', JSON.stringify(this.user)); 
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }
}
