import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: any;
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("https://fakestoreapi.com/products");
  }

  getProduct(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }

  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }

  clearProducts() {
    this.items = [];
    return this.items;
  }
  
}
