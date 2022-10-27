import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card';
import { Sort } from '@angular/material/sort';
import { CARD } from '../cards-mock';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-card-read-list',
  templateUrl: './card-read-list.component.html',
  styleUrls: ['./card-read-list.component.css'],
})
export class CardReadListComponent implements OnInit {
  @Input() cards: Card[] = CARD;
  cardSearch: string = '';
  sortedData: Card[];
  replaceValues: string[] = [];
  searchValue: string = 'name';
  test: string = '';

  constructor(public dialog: MatDialog) {
    this.sortedData = this.cards.slice();
  }

  ngOnInit(): void {}

  replaceCard(index: number, selectOption: string): void {
    this.test = selectOption;
    let swap: Card = { ...this.cards[index] };
    if (this.test === 'up' && index != 0) {
      this.cards[index] = { ...this.cards[index - 1] };
      this.cards[index - 1] = swap;
    } else if (this.test === 'down' && index != this.cards.length - 1) {
      this.cards[index] = { ...this.cards[index + 1] };
      this.cards[index + 1] = swap;
    }
    this.test = 'replace';
  }

  openInfo(idnfoId: number): void {
    const card = this.cards.find((card) => card.id == idnfoId);
    if (!card) {
      return;
    }
    const dialogRef = this.dialog.open(ViewDialogComponent, { data: card });
  }

  sortData(sort: Sort) {
    const data = this.cards.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'startDate':
          return compare(a.startDate, b.startDate, isAsc);
        case 'finishDate':
          return compare(a.finishDate, b.finishDate, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
