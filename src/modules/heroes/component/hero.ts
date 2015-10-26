import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from "../services/hero-service";
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
require('./../tpl/hero.scss');

@Component({
    selector: 'my-app',
    templateUrl: './modules/heroes/tpl/hero.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, Alert],
})

export class AppComponent {
    public heroes: Array<Hero>;
    public selectedHero: Hero;
    private alerts:Array<Object> = [];

    constructor(private _heroService: HeroesService) {
        this._heroService.getHeroes().then((heroes:Hero[])  => this.heroes = heroes)
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }

    addAlert(){
        this.alerts.push({msg: 'Another alert!', closable: true});
    }
}