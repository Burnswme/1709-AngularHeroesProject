import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()

export class HeroService{

    /*
        A promise essentially promises to call back when the results are ready.
        You ask an asynchronous service to do some work and give it a callback function.
        The service does that work and eventually calls the function with the results or an error.
    */
    getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()),2000);
        });
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
      }
}







