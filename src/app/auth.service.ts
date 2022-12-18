import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl!: string;

  constructor() { }

  login(name: string, password: string) : Observable<boolean>{
    let isLoggedIn: boolean = false;
    console.log('name ' + name + " password " + password);
    if(name == 'admin' && password == 'admin') {
      isLoggedIn = true;
    }
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

}
