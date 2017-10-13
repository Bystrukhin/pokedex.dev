import { Component, DoCheck, Input } from '@angular/core';
import { Details } from '../card/details';

@Component({
    selector: 'app-selected-card',
    templateUrl: './selected-card.component.html',
    styleUrls: ['./selected-card.component.css']
})
export class SelectedCardComponent implements DoCheck {
    @Input() selectedDetails: Details;

    constructor() { }

    ngDoCheck() {
        this.selectedDetails = JSON.parse(localStorage.getItem('selectedFavoritePokemon'));
    }

}
