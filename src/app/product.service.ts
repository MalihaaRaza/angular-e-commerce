import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Product[] = products;
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("https://fakestoreapi.com/products");
  }

  clearProducts() {
    this.items = [];
    return this.items;
  }
  
}
