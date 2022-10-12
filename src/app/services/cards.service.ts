import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.url + 'cards');

  }

  updateCard(card: Card): Observable<Card> {
    return this.httpClient.put<Card>(this.url + 'cards/' + card.id, card);
  }
}
