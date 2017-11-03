import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


/*Component Decorator requires a selector and template/templateurl

*/

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.components.html',
  styleUrls: ['./app.component.css'],
})
/*
    Applying the @Injectable() decorator from the start ensures consistency and future-proofing.
        What if the service caches heroes and share that cache with others? You couldn't do that.
    By using the DI Service will be a singleton

    Angular offers interfaces for tapping into critical moments in the component lifecycle: 
    at creation, after each change, and at its eventual destruction.

    
*/
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  title = 'Heroes';
  selectedHero: Hero;

  //constructor
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  //click fun
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  //Getter
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  //init method
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
}

