import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  // Holds the list of basket items
  public basketItems: object[] = [];
  // Decides whether to display the error message or not
  thereAreBasketItems: boolean = false;

  constructor(private data: BasketService) {}

  ngOnInit() {
  	// Get the basket items
  	this.data.getMyBasketRows().subscribe(success => {
  	  if (success) {
  	  	this.basketItems = this.data.basketItems;
  	  	this.thereAreBasketItems = true;
  	  }
  	});
  }
}
