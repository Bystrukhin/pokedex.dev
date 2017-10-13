import {Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-grid-list',
    templateUrl: 'grid-list.component.html',
    styleUrls: ['grid-list.component.css']
})

export class GridListComponent implements OnInit {
    favorite = [];
    favoriteToggle = [];
    pokemons = [];
    selected = [];
    selectedDetails = [];
    selectedRow: Number;
    ratioGutter = 20;
    fitListHeight = '600px';
    fitListWidth = '600px';
    margin = '20px';
    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.dataService.getPokemons()
            .subscribe(result => {
                this.pokemons = result;
            });
        localStorage.removeItem('buffer');
        localStorage.removeItem('selectedBuffer');
        localStorage.removeItem('selectedFavoritePokemon');
        localStorage.removeItem('selectedPokemon');
        localStorage.removeItem('selectedMonster');
        localStorage.removeItem('selectedFavoriteMonster');
    }

    addToFavorites(item) {
        this.favorite = JSON.parse(localStorage.getItem('pokemons') || '[]');
        this.favoriteToggle = JSON.parse(localStorage.getItem('pokemonsToggle') || '[]');
        this.selectedDetails = JSON.parse(localStorage.getItem('selectedFavoritePokemon') || '[]');
        if (!this.favoriteToggle.includes(item.name)) {
            this.favoriteToggle.push(item.name);
            this.favorite.push(item);
            localStorage.setItem('pokemonsToggle', JSON.stringify(this.favoriteToggle));
            localStorage.setItem('pokemons', JSON.stringify(this.favorite));
        } else {
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
        }

    addToSelected(item, index) {
        localStorage.setItem('selectedMonster', JSON.stringify(item.name));
        this.selectedRow = index;
        this.selected.pop();
        this.selected.push(item);
        localStorage.setItem('buffer', JSON.stringify(this.selected));
    }
    showDetails() {
        this.selected = JSON.parse(localStorage.getItem('buffer') || '[]');
        localStorage.removeItem('buffer');
        localStorage.setItem('selectedPokemon', JSON.stringify(this.selected));
    }
}
