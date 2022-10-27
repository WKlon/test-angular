import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../card/card';

@Pipe({
  name: 'cardsFilter',
  pure: false,
})
export class CardsFilterPipe implements PipeTransform {
  transform(
    cards: Card[],
    cardSearch: string = '',
    field: string = 'name'
  ): Card[] {
    if (!cardSearch.trim()) {
      return cards;
    }

    return cards.filter((card) => {
      return card[field as keyof Omit<Card, 'id'>]
        .toLowerCase()
        .includes(cardSearch.toLowerCase());
    });
  }
}
