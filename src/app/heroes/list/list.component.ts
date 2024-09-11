import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  // opcional
  public deletedHero?: string;

  removeLastHero(): void {
    // pop() - Elimine el ultimo elemento de la lista
    this.deletedHero = this.heroNames.pop();
  }

}
