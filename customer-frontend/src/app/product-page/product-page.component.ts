import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private productId: number;
  private product: Product;

  constructor(private data: ProductService) {}

  ngOnInit() {
    // Subscribe to the route parameters and pull out the ID
    this.route.params.subscribe(params => {
      this.productId = +params["id"]; // + converts from string to number
    });

    // Get the data for the current page's product from ProductService and stash it locally
  	this.data.getProductById().subscribe(success => {
  	  if (success) {
  	  	this.product = data.product;
  	  }
  	});
  }
}