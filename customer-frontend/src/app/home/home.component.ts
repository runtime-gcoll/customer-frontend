import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // This gets used in the searchQuery parameter when we redirect, it's data bound to the search box
  private searchTerm: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
  	// Pass the route as a string and the queryParams as a key:value object
  	console.log(this.searchTerm);
    this.router.navigate(["/products", { searchTerm: this.searchTerm }]);
  }

}
