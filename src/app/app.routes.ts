import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'listado-tareas',
    loadComponent: () => import('./listado-tareas/listado-tareas.page').then( m => m.ListadoTareasPage)
  },
  {
    path: 'editar-tareas/:id',
    loadComponent: () => import('./editar-tareas/editar-tareas.page').then( m => m.EditarTareasPage)
  },
  {
    path: 'crear-tareas',
    loadComponent: () => import('./crear-tareas/crear-tareas.page').then( m => m.CrearTareasPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'modal-editar',
    loadComponent: () => import('./modal-editar/modal-editar.page').then( m => m.ModalEditarPage)
  },
  {
    path: 'tabseminario',
    loadComponent: () => import('./tabseminario/tabseminario.page').then( m => m.TabseminarioPage)
  },

];
