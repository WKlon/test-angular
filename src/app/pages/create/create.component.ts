import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card/card';
import { CARD } from 'src/app/cards-mock';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {}
  CardList: Card[] = CARD;
  getMaxId(): number {
    let id = this.CardList[0].id;
    this.CardList.forEach((card) => {
      id = card.id > id ? card.id : id;
    });
    return ++id;
  }
  addCard(addingCard: Card) {
    addingCard.id = this.getMaxId();
    this.CardList.unshift(addingCard);
    console.log(addingCard);
    console.log();
  }

  deleteCard(deletedCard: Card): void {
    this.CardList = this.CardList.filter((card) => {
      return card != deletedCard;
    });
  }
  copyCard(copyingCard: Card): void {
    const card = { ...copyingCard };
    card.id = this.getMaxId();
    this.CardList.unshift(card);
  }
}
