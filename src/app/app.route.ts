import { Route } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './features/login/components/login-page/login-page.component'
      ).then((x) => x.LoginPageComponent),
  },
  {
    path: 'main',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/main/components/main-page/main-page.component').then(
        (x) => x.MainPageComponent
      ),
    loadChildren: () =>
      import('./features/main/main-routes').then((x) => x.ROUTES),
  },
  // {
  //   path: 'admin/:id',
  //   loadComponent: () =>
  //     import(
  //       './features/admin/components/admin-page/admin-page.component'
  //     ).then((x) => x.AdminPageComponent),
  // },
];
