import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import { ModalType } from '../modal-create-card/modal-create-card.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  modify: ModalType = ModalType.MODIFY;
  @Input() card!: Card;
  constructor(private cardService: CardsService) { }

  ngOnInit(): void {

  }


  editCard() {

  }

  openModalEdit() {

   console.log(this.card);
  }

  modifyCard(title: string, description: string) {
    this.card.title = title;
    this.card.description = description;

    this.cardService.updateCard(this.card).subscribe(card => {
      console.log(card);
    }
    );

  }

}
