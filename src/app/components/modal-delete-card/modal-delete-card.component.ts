import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-modal-delete-card',
  templateUrl: './modal-delete-card.component.html',
  styleUrls: ['./modal-delete-card.component.css']
})
export class ModalDeleteCardComponent implements OnInit {
  @Input() card!: Card
  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(): void {
    console.log(`delete card ${this.card.title}`);
  }

}
