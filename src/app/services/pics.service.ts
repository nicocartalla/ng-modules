import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pic } from '../models/pic';

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getPics(): Observable<Pic[]> {
    return this.httpClient.get<Pic[]>(this.url + 'pics');
  }
}
