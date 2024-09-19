import { Component, Output, EventEmitter } from '@angular/core';
import { Category, categories } from '../categories';
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
    this.categories = [...categories];
    this.productService.getCategories().subscribe((res:any) => {
        this.categories = res;
        // console.log(res)
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    )
  }

  selectCategory(category: any) { 
    this.selectedCategory = category; 
    this.sendCategory.emit(this.selectedCategory);
    // console.log(category); 
  }

  
}
