import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // RegisterDTO in JSON
  public creds = {
  	username: "",
  	password: "",
  	confirmPassword: ""
  }

  // Only displayed if it exists
  errorMessage: string = "";

  constructor(private account: AccountService, private router: Router) {}

  ngOnInit() {
  }

  onRegister() {
    this.account.register(this.creds)
	  .subscribe(success => {
	    if (success) {
	      this.router.navigate(["/login"]);
	    }
	  }, err => {
	    // Set error message
	    this.errorMessage = "Registration failed";
	    // Blank out fields
	    this.creds.password = this.creds.confirmPassword = "";
	  });
  }
}