/**
 * Created by daniele on 23/10/2015.
 */
declare class Hero {
    id: number;
    name: string;
}

interface MyHero {
    heroes:Hero[];
    selectedHero: Hero;
    title:String;
    onSelect(hero: Hero);
    getSelectedClass(hero: Hero);
}
