import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any[] = [];
  @Output() sendCategory = new EventEmitter<any>();

  selectedCategory: any | undefined;

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.productService.getCategories().subscribe((res:any) => {
        this.categories = res;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    )
    // this.categories = this.categories.map(c => c.toLowerCase());
  }

  selectCategory(category: any) { 
    this.selectedCategory = category; 
    this.sendCategory.emit(this.selectedCategory);
    // console.log(category); 
  }

  
}
