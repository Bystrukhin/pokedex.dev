export class Pokemon {
    pokemon: String;
    clicked: Boolean;
    selected: Boolean;
    constructor(item: String) {
        this.pokemon = item;
        this.clicked = false;
        this.selected = false;
    }
}