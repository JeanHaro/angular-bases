import { Injectable } from '@angular/core';

// Interface
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegetta',
      power: 7500
    }
  ];

  odNewCharacter (character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter (id: number) {
    this.characters.splice(id, 1);
  }
}
