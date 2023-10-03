import { Route } from '@angular/router';
import { MovieListComponent } from '../movie/components/movie-list/movie-list.component';
import { AdminPageComponent } from '../admin/components/admin-page/admin-page.component';
import { authGuard } from 'src/app/shared/guards/auth.guard';

export const ROUTES: Route[] = [
  {
    path: 'movies',
    canActivate: [authGuard],
    component: MovieListComponent,
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    component: AdminPageComponent,
  },
];
