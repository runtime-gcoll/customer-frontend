import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products = [];

  constructor(private data: ProductService) {
  	this.products = data.products;
  }

  ngOnInit() {
  	this.data.loadProducts().subscribe(success => {
  	  if (success) {
  	  	this.products = this.data.products;
  	  }
  	});
  }
}
