import { Component } from '@angular/core';

// Interfaces
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-create-character',
  templateUrl: './form-create-character.component.html',
  styleUrls: ['./form-create-character.component.css']
})
export class FormCreateCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    console.log(this.character);
  }
}
