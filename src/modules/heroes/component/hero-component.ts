import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {HEROES} from '../services/mock-heroes';

@Component({
    selector: 'my-app',
    templateUrl: './modules/heroes/tpl/hero.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls:['./modules/heroes/tpl/hero.css'],
})

export class AppComponent implements MyHero {
    public heroes = HEROES;
    public selectedHero: Hero;
    public title = 'Tour of Heroes';

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}
