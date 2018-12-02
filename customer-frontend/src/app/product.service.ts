import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [];

  constructor(private http: HttpClient) {}

  // Get all of the products in the database
  getAllProducts(): Observable<boolean> {
  	return this.http.get("http://localhost:5000/api/product/all").pipe(
  	  map((data: Product[]) => {
  	    this.products = data;
  	    return true;
  	  }));
  }

  // Search for specific products
  searchProducts(searchTerm: string): Observable<boolean> {
    return this.http.get("http://localhost:5000/api/product/search?searchTerm=" + searchTerm).pipe(
      map((data: Product[]) => {
        this.products = data;
        return true;
      })
    );
  }
}
