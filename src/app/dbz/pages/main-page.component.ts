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
    public dbzService: DbzService
  ) {}

  onDeleteCharacter (index: string) {
    this.dbzService.deleteCharacterById(index);
  }

  odNewCharacter (character: Character) {
    this.dbzService.odNewCharacter(character);
  }
}
