import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="inmcreaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="inmcreaseBy(-1)">-1</button>
  `,
  standalone: false
})

export class CounterComponent {
  constructor() { }

  private reset: number = 10;
  public counter: number = this.reset;

  inmcreaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = this.reset;
  }
}
