import {HEROES} from './mock-heroes';

export class HeroesService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

}