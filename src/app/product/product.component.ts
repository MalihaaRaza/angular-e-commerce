import { Component,Input,OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit , OnChanges{

  constructor(private productService: ProductService){}
  
  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = "";

  selectedProduct: any | undefined;
  @Input() selectedCategory: any | undefined;

  ngOnInit() {
      this.productService.getProducts().subscribe((res:any) => {
          this.products = res;
          this.filteredProducts = this.products;
          // console.log(res)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      const previousValue = changes['selectedCategory'].previousValue;
      const currentValue = changes['selectedCategory'].currentValue;
      this.filteredProducts = this.products.filter(p => this.selectedCategory == p.category);
    }
  }

  searchProduct(newSearchText: string) {
    this.searchText = newSearchText;
    this.filteredProducts = this.searchText 
        ? this.products.filter(product => 
            product.title.toLowerCase().includes(this.searchText.toLowerCase()))
        : this.products; 
}


  selectProduct(product: any) { this.selectedProduct = product; }

}
