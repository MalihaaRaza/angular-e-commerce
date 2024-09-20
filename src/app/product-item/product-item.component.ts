import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: any;
  isLoggedIn: boolean = false;

  constructor( private authService:AuthService,private cartService: CartService ) 
  { }

  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
