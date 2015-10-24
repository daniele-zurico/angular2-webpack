import {bootstrap} from 'angular2/angular2';
import {HeroesService} from './heroes/services/hero-service';
import {AppComponent} from './heroes/component/hero-component';

bootstrap(AppComponent, [HeroesService]);
