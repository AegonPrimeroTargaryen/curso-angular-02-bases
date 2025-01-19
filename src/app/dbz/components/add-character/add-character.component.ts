import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false,
})
export class DbzAddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{
    console.log(this.character);

    const {name, power} = this.character;

    if (name.length === 0 || power <=0) return;

    this.onNewCharacter.emit(this.character);

    this.character= {name: '', power: 0};
  }
 }
