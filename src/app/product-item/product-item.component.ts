import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: any;

  constructor( private cartService: CartService ) 
  { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
