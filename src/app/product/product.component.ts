import { Component,Input,OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { Product, products } from '../products';
import { Category } from '../categories';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(private productService: ProductService){}
  
  products: any[] = [];

  selectedProduct: any | undefined;
  @Input() selectedCategory: Category | undefined;

  ngOnInit() {
      this.productService.getProducts().subscribe((res:any) => {
          this.products = res;
          console.log(res)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    )
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['selectedCategory']) {
  //     const previousValue = changes['selectedCategory'].previousValue;
  //     const currentValue = changes['selectedCategory'].currentValue;
  //     this.products = products.filter(p => this.selectedCategory?.name == p.category);
  //   }
  // }

  selectProduct(product: any) { this.selectedProduct = product; }

}
