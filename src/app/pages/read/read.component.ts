import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card/card';
import { CARD } from 'src/app/cards-mock';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  CardList: Card[] = CARD;
  constructor() {}

  ngOnInit(): void {}
}
