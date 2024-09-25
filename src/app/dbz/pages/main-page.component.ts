import { Component } from '@angular/core';

// Interfaces
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {
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
