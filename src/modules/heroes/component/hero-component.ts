import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from "../services/hero-service";

@Component({
    selector: 'my-app',
    templateUrl: './modules/heroes/tpl/hero.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls:['./modules/heroes/tpl/hero.css'],
})

export class AppComponent implements MyHero{
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    public heroes: Array<Hero> = [];
    public selectedHero: Hero = {
        id: 16,
        name: "RubberMan"
    };
    public test = {
        id: 16,
        name: "RubberMan"
    };

    constructor(private _heroService: HeroesService) {
        this._heroService.getHeroes().then((heroes:Hero[])  => this.heroes = heroes)
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}