import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private account: AccountService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
  	this.account.logout();
  	window.location.reload();
  }

}
