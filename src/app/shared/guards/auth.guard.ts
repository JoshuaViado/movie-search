import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const hasAuthenticated = true;
  const router = inject(Router);
  !hasAuthenticated && router.navigate(['login']);
  return hasAuthenticated;
};
