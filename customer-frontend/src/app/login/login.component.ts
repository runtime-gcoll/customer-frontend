import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // This is effectively the client-side equivalent of a DTO, it gets sent to the API endpoint and then unmarshalled into the LoginDTO class on the backend
  public creds = {
  	username: "",
  	password: ""
  };
  // Gets set in onLogin if the backend fails to validate credentials and return the token & expiration
  errorMessage: string = "";

  constructor(private account: AccountService, private router: Router) {}

  ngOnInit() {
  }

  onLogin() {
  	// Call the AccountService login method
  	this.account.login(this.creds)
  		.subscribe(success => {
  		  if (success) {
  		  	this.router.navigate(["/"]);
  		  }
  		}, err => {
  		  this.errorMessage = "Failed to login";
  		  // Clear out the password field by setting the creds object value
  		  // This works since the data binding on [(ngModel)] goes both ways
  		  this.creds.password = "";
  		});
  }
}