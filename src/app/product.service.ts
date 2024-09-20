import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: any;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }

  getProduct(id:any): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products/"+id);
  }

  getCategories():Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products/categories");
  }

  clearProducts() {
    this.items = [];
    return this.items;
  }
  
}
