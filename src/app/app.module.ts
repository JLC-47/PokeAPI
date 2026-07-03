import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeCardComponent } from './features/poke/components/poke-card/poke-card.component';
import { PokeListComponent } from './features/components/poke-list/poke-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
