import { Route } from '@angular/router';
import { MovieListComponent } from '../movie/components/movie-list/movie-list.component';
import { AdminPageComponent } from '../admin/components/admin-page/admin-page.component';

export const ROUTES: Route[] = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];
