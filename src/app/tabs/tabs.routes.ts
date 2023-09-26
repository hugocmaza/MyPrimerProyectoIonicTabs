import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CrearTareasPage } from '../crear-tareas/crear-tareas.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'crear-tareas',
        loadComponent: () =>
          import('../crear-tareas/crear-tareas.page').then((m) => m.CrearTareasPage),
      },
      {
        path: 'acerca-de',
        loadComponent: () =>
          import('../acerca-de/acerca-de.page').then((m) => m.AcercaDePage),
      },
      {
        path: 'tabseminario',
        loadComponent: () =>
          import('../tabseminario/tabseminario.page').then((m) => m.TabseminarioPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
