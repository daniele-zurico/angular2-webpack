import {HEROES} from './mock-heroes';
import * as Rx from 'rx';

export class HeroesService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

}