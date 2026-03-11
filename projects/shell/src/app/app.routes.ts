import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'news',
    loadComponent: () => loadRemoteModule('newsMfe', './Component').then((m) => m.App),
  },
];
