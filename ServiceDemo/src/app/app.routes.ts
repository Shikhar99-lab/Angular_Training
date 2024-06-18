import { Routes } from '@angular/router';
import { SpiderManComponent } from '../components/spider-man/spider-man.component';
import { IronManComponent } from '../components/iron-man/iron-man.component';

export const routes: Routes = [
    { path : 'ironman' , component : IronManComponent},
    { path : 'spiderman' , component : SpiderManComponent}
];
