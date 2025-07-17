import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private router: Router) {}
  canActivate():boolean{
    if (typeof window === 'undefined' || !window.localStorage) {
    // Not in browser, deny access or handle accordingly
    this.router.navigate(['']);
    return false;
  }
    const role = localStorage.getItem('role');
    if( typeof window !== 'undefined' && role){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
};
