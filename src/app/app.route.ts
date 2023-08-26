import { Route } from '@angular/router';
import { SearchStartPageComponent } from './search/components/search-start-page/search-start-page.component';
import { SearchMainPageComponent } from './search/components/search-main-page/search-main-page.component';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: SearchStartPageComponent,
  },
  {
    path: 'main/:query',
    component: SearchMainPageComponent,
  },
];
