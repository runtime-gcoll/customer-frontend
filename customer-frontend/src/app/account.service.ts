import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // The JWT we get from our API
  // Needs to be public for access in other services (have public get func?)
  public token: string = "";
  // When the token will expire
  private tokenExpiration: Date = null;

  constructor(private http: HttpClient) {}

  public get loginRequired(): boolean {
  	// If there's no token or if the token has expired, then we need to log in again
  	return this.token.length == 0 || this.tokenExpiration > new Date();
  }

  // POSTs a username & password to the API and hopes for a JWT and expiry date in return
  login(creds): Observable<boolean> {
    // arg1 is the URl to post to, arg2 is the JSON request body

    return this.http.post("http://localhost:5000/api/account/login", creds).pipe(
      map((data: any) => {
        this.token = data.token;
        this.tokenExpiration = data.expiration;
        return true;
      })
    );
  }

  register(creds): Observable<boolean> {
    return this.http.post("http://localhost:5000/api/account/register", creds).pipe(
      map((data: any) => {
        return true;
      })
    );
  }

  // There's nothing we need to do on the server side to "log out", we just stop
  // sending the bearer token and it'll eventually time out
  logout() {
    this.token = "";
    this.tokenExpiration = null;
  }
}