import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products = [];

  constructor(private http: HttpClient) {}

  loadProducts() {
  	return this.http.get("http://localhost:50334/api/product/all").pipe(
  	  map((data: any[]) => {
  	    this.products = data;
  	    return true;
  	  }));
  }
}
