import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Needed to send auth token to server
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Get the current login token
import { AccountService } from './account.service';
// Model

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private httpOptions = {
  	headers: new HttpHeaders({
  	  'Authorization': "Bearer " + this.account.token
  	})
  }

  public basketItems: any[] = [];

  constructor(private http: HttpClient, private account: AccountService) {}

  getMyBasketRows(): Observable<boolean> {
  	return this.http.get("http://localhost:5000/api/basket/mybasket", this.httpOptions).pipe(
  	  map((data: any[]) => {
  	  	this.basketItems = data;
  	  	return true;
  	  })
  	);
  }
}