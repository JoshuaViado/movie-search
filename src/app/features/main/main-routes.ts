import { Route } from '@angular/router';
import { SearchListComponent } from '../search/components/search-list/search-list.component';
import { AdminPageComponent } from '../admin/components/admin-page/admin-page.component';

export const ROUTES: Route[] = [
  {
    path: 'movies',
    component: SearchListComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];
