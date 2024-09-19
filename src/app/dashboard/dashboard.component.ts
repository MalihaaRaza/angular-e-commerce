import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input()  category: Category | undefined;
  selectedCategory: Category | undefined;

  getCategory(data: Category) {
    this.selectedCategory = data;
  }
}
