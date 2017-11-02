import { Component } from '@angular/core';

export class Hero{
  id: number;
  name: string;
}
const HEROES: Hero [] = [
  {id: 1,name: 'Angly Joe'},
  {id: 2,name: 'Dr. Exploder'},
  {id: 3,name: 'Mammon Man'},
  {id: 4,name: 'The Diggler'},
  {id: 5,name: 'Madame Flasher'},
  {id: 6,name: 'The Stride-Rite Kid'},
  {id: 7,name: 'Smacky'},
  {id: 8,name: 'The Salesman'},
  {id: 9,name: 'Gunshot to the Heart Man'},
  {id: 10,name: 'Mysterique'}
  ];

/*Component Decorator requires a selector and template/templateurl

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Heroes App';
  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  
}

