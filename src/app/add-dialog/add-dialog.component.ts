import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Card } from '../card/card';
import getCurrentTime from '../utils/parse-time';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent implements OnInit {
  name: string = '';

  startDate: string = new Date().toISOString().substring(0, 10);
  startTime: string = getCurrentTime();
  finishDate: string = '';
  finishTime: string = '';
  description = '';

  vall = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.vall.hasError('required')) {
      return 'You must enter a value';
    } else return;
  }

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {}

  onAdd(): void {
    this.dialogRef.close({
      name: this.name,
      startDate: this.startDate,
      startTime: this.startTime,
      finishDate: this.finishDate,
      finishTime: this.finishTime,
      description: this.description,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
