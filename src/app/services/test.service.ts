import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  counter = 0;

  icren() {
    this.counter++;
  }

  decrem() {
    this.counter--;
  }
  getC(): number {
    return this.counter;
  }
  constructor() {}
}
