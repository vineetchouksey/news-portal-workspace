import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => App,
  },
  {
    path: 'dashboard',
    loadComponent: () => loadRemoteModule('dashboardMfe', './Component').then((m) => m.App),
  },
  {
    path: 'news',
    loadComponent: () => loadRemoteModule('newsMfe', './Component').then((m) => m.App),
  },
  {
    path: 'stock',
    loadComponent: () => loadRemoteModule('stockMfe', './Component').then((m) => m.App),
  },
  {
    path: 'books',
    loadComponent: () => loadRemoteModule('bookMfe', './Component').then((m) => m.App),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
