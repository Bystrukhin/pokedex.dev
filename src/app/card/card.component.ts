import { Component, DoCheck, Input } from '@angular/core';
import { Details } from './details';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements DoCheck {
    @Input() details: Details;

  constructor() { }

  ngDoCheck() {
      this.details = JSON.parse(localStorage.getItem('selectedPokemon'));
  }

}
