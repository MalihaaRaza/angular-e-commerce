import { Component, Output, EventEmitter } from '@angular/core';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [];
  @Output() sendCategory = new EventEmitter<Category>();

  selectedCategory: Category | undefined;

  ngOnInit() {
    this.categories = [...categories];
  }

  selectCategory(category: Category) { 
    this.selectedCategory = category; 
    this.sendCategory.emit(this.selectedCategory); 
  }

  
}
