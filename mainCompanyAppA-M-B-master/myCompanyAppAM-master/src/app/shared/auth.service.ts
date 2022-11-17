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
  }

  
}
