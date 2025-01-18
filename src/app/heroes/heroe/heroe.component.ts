import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,

  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age: number = 40;

  public nameChange: string = 'spiderman';
  public ageChange: number = 25;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = this.nameChange;
  }

  changeAge(): void {
    this.age = this.ageChange;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 40;
  }
}
