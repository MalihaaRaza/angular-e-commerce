import { Component,Input,OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { Product, products } from '../products';
import { Category } from '../categories';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges{

  constructor(private productService: ProductService){}
  
  products: any[] = [];

  selectedProduct: Product | undefined;
  @Input() selectedCategory: Category | undefined;

  ngOnInit() {
    if(this.selectedCategory == undefined){
      this.productService.getProducts().subscribe((res:any)=>{
          this.products = res.data;
          console.log(res.data)
      }
    )}
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      const previousValue = changes['selectedCategory'].previousValue;
      const currentValue = changes['selectedCategory'].currentValue;
      this.products = products.filter(p => this.selectedCategory?.name == p.category);
    }
  }

  selectProduct(product: Product) { this.selectedProduct = product; }

}
