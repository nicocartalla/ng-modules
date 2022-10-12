import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cardsview',
  templateUrl: './cardsview.component.html',
  styleUrls: ['./cardsview.component.css']
})
export class CardsviewComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  }
  
  getCards() {
    this.cardsService.getCards().subscribe(cards => { this.cards = cards; });
  }

}
