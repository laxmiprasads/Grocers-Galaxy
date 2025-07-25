import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
    
  private apiUrl='http://localhost:3000/users';
  

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}
