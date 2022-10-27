import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from './card';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  count: number = 100;
  @Output() onCopy: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() onDelete: EventEmitter<Card> = new EventEmitter<Card>();
  @Input() card?: Card;
  constructor(private testService: TestService) {}
  ngOnInit(): void {
    this.count = this.testService.counter;
  }
  deleteCard(deletedCard: Card): void {
    this.onDelete.emit(deletedCard);
  }

  copyCard(copyindCard: Card): void {
    this.onCopy.emit(copyindCard);
  }
}
