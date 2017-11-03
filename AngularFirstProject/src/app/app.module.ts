import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
 
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

 /*
  The Routes are an array of routhe definitions.
  This route definition has the following parts:
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    /*RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/id',
        component: HeroDetailComponent
      }
  ])*/
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ],
  
  
})
export class AppModule { }