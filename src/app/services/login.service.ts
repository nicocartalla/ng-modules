import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = 'http://localhost:8080/api/';
  users: User[] = [];
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + 'login');
  }



  loadUsers(): void {
    var users: User[] = [];
    this.getUsers().subscribe(data => {
      data.forEach(user => {
        users.push(user);
      });
      this.users = users;
    }
    );
  }


  login(username: string,password: string): boolean {
    this.loadUsers();
    var userFound = this.users.find(x => x.username == username && x.password == password);
    if (userFound) {
      return true;
    }
    return false;
  }



}
