import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

// Interface
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500
    }
  ];

  odNewCharacter ( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(character);
  }

  deleteCharacterById ( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id )
  }
}
