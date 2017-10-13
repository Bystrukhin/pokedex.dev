import {Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-selected-grid-list',
    templateUrl: 'selected-grid-list.component.html',
    styleUrls: ['selected-grid-list.component.css'],
})

export class SelectedGridListComponent implements DoCheck {
    favorite = [];
    favoriteToggle = [];
    selectedDetails = [];
    selectedPokemons = [];
    selectedRow: Number;
    selectedFavoritePokemon = [];
    ratioGutter = 20;
    fitListHeight = '600px';
    fitListWidth = '600px';
    margin = '20px';
    constructor() {}
    ngDoCheck() {
        const data = localStorage.getItem('pokemons');
        this.selectedPokemons = JSON.parse(data);
    }
    deleteFromFavorites(item) {
        this.favorite = JSON.parse(localStorage.getItem('pokemons') || '[]');
        this.favoriteToggle = JSON.parse(localStorage.getItem('pokemonsToggle') || '[]');
        this.selectedDetails = JSON.parse(localStorage.getItem('selectedFavoritePokemon') || '[]');
        let pos = 0;
        this.favorite.forEach(function (elem, index, array) {
            if (elem.name === item.name) {
                pos = index;
            }
        });
        this.selectedDetails.forEach(function (elem, index, array) {
            if (elem.name === item.name) {
                localStorage.removeItem('selectedFavoritePokemon');
            }
        });
        this.favorite.splice(pos, 1);
        this.favoriteToggle.splice(this.favoriteToggle.indexOf(item.name), 1);
        localStorage.setItem('pokemons', JSON.stringify(this.favorite));
        localStorage.setItem('pokemonsToggle', JSON.stringify(this.favoriteToggle));
    }
    addToSelected(item, index) {
        localStorage.setItem('selectedFavoriteMonster', JSON.stringify(item.name));
        this.selectedRow = index;
        this.selectedFavoritePokemon.pop();
        this.selectedFavoritePokemon.push(item);
        localStorage.setItem('selectedBuffer', JSON.stringify(this.selectedFavoritePokemon));
    }
    showSelectedDetails() {
        this.selectedFavoritePokemon = JSON.parse(localStorage.getItem('selectedBuffer') || '[]');
        localStorage.removeItem('selectedBuffer');
        localStorage.setItem('selectedFavoritePokemon', JSON.stringify(this.selectedFavoritePokemon));
    }
}
