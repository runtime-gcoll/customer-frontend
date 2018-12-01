import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product: Product;
  isNormal: boolean = false;
  isWarn: boolean = false;
  isDanger: boolean = false;

  @Input() thisProd;

  constructor() { }

  ngOnInit() {
  	this.product = this.thisProd;

  	if (this.product.quantity <= 100 && this.product.quantity > 30) {
  	  this.isWarn = true;
  	} else if (this.product.quantity <= 30) {
  	  this.isDanger = true;
  	} else {
  	  this.isNormal = true;
  	}
  }
}
