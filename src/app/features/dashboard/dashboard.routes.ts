import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.HomeComponent)
  },
  {
    path: 'week/:id',
    loadComponent: () =>
      import('./pages/week-details/week-details')
        .then(m => m.WeekDetailsComponent)
  }
];
