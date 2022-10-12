import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/models/card.model';
@Component({
  selector: 'app-modal-create-card',
  templateUrl: './modal-create-card.component.html',
  styleUrls: ['./modal-create-card.component.css']
})
export class ModalCreateCardComponent implements OnInit {
  card: Card = {
    id: 0,
    title: '',
    description: ''
  };

  @Input() cardInput!: Card;
  @Input() modalType: ModalType = ModalType.CREATE;
  @Output() btnSave = new EventEmitter<Card>();


  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  outputCard(title: string, description: string) {
    this.cardInput.title = title;
    this.cardInput.description = description;
    this.btnSave.emit(this.card);
    this.modal.dismissAll();
  }

}

export enum ModalType {
  CREATE = 'create',
  MODIFY = 'modify'

}