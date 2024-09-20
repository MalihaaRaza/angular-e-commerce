import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { Product} from '../../products';
import { AuthService } from '../../auth.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent implements OnInit{
  product: any | undefined;
  isLoggedIn: boolean = false;

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productService.getProduct(productIdFromRoute).subscribe((res:any) => {
      this.product = res;
      console.log(res)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    )
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
