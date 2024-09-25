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
  public id: EventEmitter<number> = new EventEmitter();

  onDeleteId (index: number) {
    this.id.emit(index);
  }

  onDeleteCharacter (index: number): void {
    // TODO: Emitir el ID del personaje
    console.log(index);
  }

}
