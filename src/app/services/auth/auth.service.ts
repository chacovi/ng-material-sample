import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from '@app/model/user.model'
import { AuthData } from '@app/model/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    console.log(`this user ${this.user} is login`);
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/dashboard']);
  }
}