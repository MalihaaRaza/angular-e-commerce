import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input()  category: any | undefined;
  @Input() LoggedIn: boolean = false;
  selectedCategory: any | undefined;

  getCategory(data: any) {
    this.selectedCategory = data;
  }
}
