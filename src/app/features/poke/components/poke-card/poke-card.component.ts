import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/poke.model';

@Component({
  selector: 'app-poke-card',
  standalone: false,
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {

  @Input() pokemon!: Pokemon;

  get image(): string{
    return this.pokemon.sprites.front_default;
  }

  get firstType(): string {
  return this.pokemon.types[0].type.name;
}
}
