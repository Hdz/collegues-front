import { Routes } from '@angular/router';
import { GallerieComponentComponent } from './gallerie-component/gallerie-component.component';
import { AproposComponentComponent } from './apropos-component/apropos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponentComponent },
    { path: 'gallerie', component: GallerieComponentComponent },
    { path: 'gallerie', component: GallerieComponentComponent },
    { path: 'about', component: AproposComponentComponent },

    { path: '', pathMatch: 'full', redirectTo: '/home' },
];