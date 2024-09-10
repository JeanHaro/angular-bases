import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  // Propiedades
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Métodos
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName (name: string) {
    this.name = name;
  }

  changeAge (age: number) {
    this.age = age;
  }
}
