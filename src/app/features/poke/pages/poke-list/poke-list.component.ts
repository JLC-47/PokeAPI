import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/poke.model';
import { PokeService } from '../../services/poke.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  standalone: false,
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent  implements OnInit{

  pokemons$: Observable<Pokemon[]> = of([]);

  pokemons: Pokemon[] = [];

  limit = 20;

  offset = 0;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokeService.getPokemons(this.limit, this.offset);
  }


}
