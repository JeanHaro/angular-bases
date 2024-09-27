import { Component } from '@angular/core';

// Servicios
import { DbzService } from '../services/dbz.service';

// Interface
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {

  constructor (
    private dbzService: DbzService
  ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter (index: string) {
    this.dbzService.deleteCharacterById(index);
  }

  odNewCharacter (character: Character): void {
    this.dbzService.odNewCharacter(character);
  }
}
