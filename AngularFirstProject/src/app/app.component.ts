import { Component } from '@angular/core';
/*
    Priginally had this inside template:
    `<h1>{{title}}</h1>
    <my-heroes></my-heroes>`
*/

//routerLink: Another one of the RouterModule's directives
//is bound to a string
@Component({selector:'app-root', 
            template: `<h1>{{title}}</h1>
                       <a routerLink="/dashboard">Dashboard</a>
                       <a routerLink="/heroes">Heroes</a>
                       <router-outlet></router-outlet>`,
            styleUrls: ['./app.component.css']           
          })
export class AppComponent{
    title = 'Tour of Heroes';
    
}