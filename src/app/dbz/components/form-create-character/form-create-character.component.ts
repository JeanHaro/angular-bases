import { Component, EventEmitter, Output } from '@angular/core';

// Interfaces
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-create-character',
  templateUrl: './form-create-character.component.html',
  styleUrls: ['./form-create-character.component.css']
})
export class FormCreateCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
