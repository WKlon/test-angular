import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card/card';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Output() onDelete: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() onCopy: EventEmitter<Card> = new EventEmitter<Card>();

  cardSearch: string = '';
  searchValue: string = 'name';
  constructor() {}

  ngOnInit(): void {}

  deleteCard(deletedCard: Card): void {
    this.onDelete.emit(deletedCard);
  }

  copyCard(deletedCard: Card): void {
    this.onCopy.emit(deletedCard);
  }
}
