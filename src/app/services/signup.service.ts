import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/api/';
  users: User[] = [];
  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url + 'login', user);
  }



  signUp(user: User): boolean {
    this.createUser(user);
    return true;
  }

  

}
