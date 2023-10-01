import { Route } from '@angular/router';
import { SearchMainPageComponent } from './features/search/components/search-main-page/search-main-page.component';
import { LoginPageComponent } from './features/login/components/login-page/login-page.component';
import { SearchStartPageComponent } from './features/search/components/search-start-page/search-start-page.component';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'start',
    component: SearchStartPageComponent,
  },
  {
    path: 'main/:id',
    component: SearchMainPageComponent,
  },
];
