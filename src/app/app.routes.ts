import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./pages/paises/paises.component').then(p => p.PaisesComponent) },
    { path: 'pais/:id', loadComponent: () => import('./pages/pais/pais.component').then(p => p.PaisComponent) },
    { path: '**', redirectTo:'',pathMatch:'full' },
];
