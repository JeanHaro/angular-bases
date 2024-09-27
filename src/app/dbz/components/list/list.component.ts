import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interfaz
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public id: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter (id?: string): void {
    if (!id) return;

    // TODO: Emitir el ID del personaje
    this.id.emit(id);
  }

}
