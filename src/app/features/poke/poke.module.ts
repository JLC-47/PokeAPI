import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PokeCardComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class PokeModule { }
