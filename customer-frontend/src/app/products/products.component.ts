import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  searchTerm: string = "";
  thereAreProducts: boolean = false;

  constructor(private data: ProductService, private route: ActivatedRoute) {
  	this.products = data.products;
  }

  ngOnInit() {
    // Get the queryString for search term
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params["searchTerm"];
    });

    // If there's no search term specified then just display all the products
    if (!this.searchTerm) {
      this.data.getAllProducts().subscribe(success => {
        if (success) {
          this.products = this.data.products;
          this.thereAreProducts = true;
        }
      });
    }
    // Otherwise, we're performing a search, and only want to return the subset of products that match our query
    else {
      this.data.searchProducts(this.searchTerm).subscribe(success => {
        if (success) {
          this.products = this.data.products;
          this.thereAreProducts = true;
        }
      });
    }
  }
}
