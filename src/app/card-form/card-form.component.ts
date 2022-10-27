import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../card/card';
import getCurrentTime from '../utils/parse-time';
import { CARD } from '../cards-mock';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Card> = new EventEmitter<Card>();
  name: string = '';
  startDate: string = new Date().toISOString().substring(0, 10);
  startTime: string = getCurrentTime();
  finishDate: string = '';
  finishTime: string = '';
  description = '';
  test: string = new Date().toISOString().substring(0, 19);
  Time: string = new Date().toLocaleString().substring(11, 16);

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let MatDialogRef = this.dialog.open(AddDialogComponent, {
      width: 'auto',
      data: {
        name: this.name,
        startDate: this.startDate,
        startTime: this.startTime,
        finishDate: this.finishDate,
        finishTime: this.finishTime,
        description: this.description,
      },
    });

    MatDialogRef.afterClosed().subscribe((result) => {
      this.addCard(result);
    });
  }

  addCard(addingCard: Card): void {
    this.onAdd.emit(addingCard);
  }

  ngOnInit(): void {}
}
