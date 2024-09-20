import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  @Input()  category: any | undefined;
  @Input() LoggedIn: boolean = false;

  selectedCategory: any | undefined;

  user: any;
  isLoggedIn: boolean = false;

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  getCategory(data: any) {
    this.selectedCategory = data;
  }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
}
