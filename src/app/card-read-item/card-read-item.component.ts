import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-read-item',
  templateUrl: './card-read-item.component.html',
  styleUrls: ['./card-read-item.component.css'],
})
export class CardReadItemComponent implements OnInit {
  @Input() card: Card = {} as Card;
  replaceValue: string = '';
  constructor() {}

  ngOnInit(): void {}
}
