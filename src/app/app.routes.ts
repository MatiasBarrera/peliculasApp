import { Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda/:id', component: BusquedaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'}, // ' ' : ruta vacia
    { path: '**', pathMatch: 'full', redirectTo: 'home'} // ** : cuaquier otra ruta
];
