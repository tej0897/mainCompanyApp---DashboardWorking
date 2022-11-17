import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private isLoggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedInpub = this.isLoggedIn.asObservable();

  constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('token');
    // it will check for token, if it is present it will return true. Else false.
  }

  // const token1 = localStorage.getItem('token')
  // this.isLoggedIn.next(!!token1);
  
}
